import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import styles from "./Recommended.module.scss"

export default function Recomended() {
  const [recTours, setRecTour] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
   const [isError, setIsError] = useState(false)
 useEffect(() => {
     const fetchData = async () => {
       try {
         setIsLoading(true)
         const res = await axios
          .get("https://berlin-backender.org.kg/recommend-tours/");
         setRecTour(res.data);
         console.log(res, "recommended")
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

  return (
    <div >
      <div>
        <h1 >Recommended</h1>
      </div>
      <div className={styles.recommended}>
         <div className={styles.discover_sliders}>
          {recTours?.map((tour, index) => (
               <div className={styles.sliders_img}>
                 <div >
                     <div className={styles.swiper_name}>
                        <h1>{tour.title}</h1>
                       </div>
                     <div className={styles.swiper_img}>
                      <img src={tour.image} />
                 </div>
 
             </div>
           </div>
              
            ))
           }
          </div>
       
          

      
        
       
      
       
      </div>
    </div>
  )
}


