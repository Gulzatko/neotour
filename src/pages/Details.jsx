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
        .get("https://berlin-backender.org.kg/tour-detail/1/");
     
        let trips = Object.values(res.data);
        console.log(trips);
        setDetailTrip(trips);
   
      
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
      
         <div  className={styles.detail}>
            <div className={styles.detail__img}>
             <img src={detailTrips[2]} /> 
            <div className={styles.goBack_btn}>
         <button  onClick={goBack}>Go back</button>
         </div>
           </div>
            <div className={styles.detail__text}>
             <div className={styles.detail__country}>
                   <h1>{detailTrips[1]}</h1>
                 <h3>Country</h3>
                 </div>
 
                  <div className={styles.detail__description}>
               <div className={styles.detail__title}>
                 <h1>title</h1>
                  </div>
               <p>{detailTrips[3]}</p>
                 </div>
               <div className={styles.details__reviews}>
                  <h2>Reviews</h2>
            
                <p>{}</p>
              
            </div>
           <Modal className={styles.detail__booking}/>
           </div> 
        </div>

       )
        

       
      

  
       
</div>
  )
}

