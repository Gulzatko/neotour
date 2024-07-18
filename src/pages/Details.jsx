import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Modal from '../Components/Modal';
import styles from "../pages/Detail.module.scss";
import axios from 'axios';

export default function Details(){
  const {id} = useParams();
  const navigate = useNavigate();
  const [detailTrips, setDetailTrip] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const goBack=() => navigate(-1);
 useEffect(() => {
  const fetchData = async () => {
    try {
      setIsLoading(true)
      const res = await axios
        .get(`https://berlin-backender.org.kg/tour-detail/1/?=${id}`);
     
        let trips = Object.keys(res.data);
        
        setDetailTrip(trips) 
      
       console.log(res.data)
    } catch (error) {
      setIsError(true)
      console.log("error", error)
    } finally {
      setIsLoading(false)
      setIsError(false)
    }
  };
  fetchData();
}, [])
if (isLoading) {
  return <>Загрузка...</>
}
if (isError) {
  return <>Упс, произошла 500 ошибка...</>
}


return(
    <div >
       {detailTrips?.map((trip,index)=>(
         <div key={index} className={styles.detail}>
            <div className={styles.detail__img}>
             <img src={trip.image} /> 
            <div className={styles.goBack_btn}>
         <button  onClick={goBack}>Go back</button>
         </div>
           </div>
            <div className={styles.detail__text}>
             <div className={styles.detail__country}>
                   <h1>{trip.title}</h1>
                 <h3>Country</h3>
                 </div>
 
                  <div className={styles.detail__description}>
               <div className={styles.detail__title}>
                 <h1>title</h1>
                  </div>
               <p>{trip.description}</p>
                 </div>
               <div className={styles.details__reviews}>
                  <h2>Reviews</h2>
            
                <p>{trip.reviews}</p>
              
            </div>
           <Modal className={styles.detail__booking}/>
           </div> 
        </div>

       )
        

       )

       }
      

  
       
</div>
  )
}

