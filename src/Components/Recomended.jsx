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
          .get("https://muha-backender.org.kg/filtered-tours/");
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
         {/* <div >
          {recTours?.map((tour, index) => (
               <div key={index}>
                 <h1>{tour.name}</h1>
                 <img src={tour.thumbnail} alt="" />
                </div>
            ))
           }
          </div> */}
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <div className={styles.sliders_img}>
            <div >
              <div className={styles.swiper_name}>
                <h1>Alta, Noorway</h1>
              </div>
              <div className={styles.swiper_img}>
                <img src="./imgs/Alta_Noorway.png" />
              </div>

            </div>
          </div>

          {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <div className={styles.sliders_img}>
            <div >
              <div className={styles.swiper_name}>
                <h1>Montana</h1>
              </div>
              <div className={styles.swiper_img}>
                <img src="./imgs/Montana.png" />
              </div>

            </div>
          </div>

          {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <div className={styles.sliders_img}>
            <div >
              <div className={styles.swiper_name}>
                <h1> Guiilin, China</h1>
              </div>
              <div className={styles.swiper_img}>
                <img src="./imgs/Guiilin_China.png" />
              </div>

            </div>
          </div>

          {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <div className={styles.sliders_img}>
            <div >
              <div className={styles.swiper_name}>
                <h1>Alta, Noorway</h1>
              </div>
              <div className={styles.swiper_img}>
                <img src="./imgs/Alta_Noorway.png" />
              </div>

            </div>
          </div>

          {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <div className={styles.sliders_img}>
            <div >
              <div className={styles.swiper_name}>
                <h1>Alta, Noorway</h1>
              </div>
              <div className={styles.swiper_img}>
                <img src="./imgs/Alta_Noorway.png" />
              </div>

            </div>
          </div>

          {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <div className={styles.sliders_img}>
            <div >
              <div className={styles.swiper_name}>
                <h1>Montana</h1>
              </div>
              <div className={styles.swiper_img}>
                <img src="./imgs/Montana.png" />
              </div>

            </div>
          </div>
          {/* ))
          } */}
        </div>
       
      </div>
    </div>
  )
}


