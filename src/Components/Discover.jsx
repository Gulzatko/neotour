import React, { useState, useEffect } from 'react';
import axios from "axios";
import { api } from "../api/api";
import styles from './Discover.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from 'swiper/modules';

const Discover = () => {
  const [tours, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const res = await axios
          .get("https://muha-backender.org.kg/list-tours/");
        setTour(res.data);
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
    <div className={styles.discover}>
      <div className={styles.discover_header}>
        <h1 className={styles.discover_h1}>Discover</h1>
        <div className={styles.discover_btns}>
        <button className="swiper-button-prev">right</button>
          <button className="swiper-button-next">left</button>
      
        </div>
      </div>
      <ul className={styles.categories}>
        <li className={styles.discover_li}><a href="">Popular</a></li>
        <li className={styles.discover_li}><a href="">Featured</a></li>
        <li className={styles.discover_li}><a href="">Most Visited</a></li>
        <li className={styles.discover_li}><a href="">Europe</a></li>
      </ul>

      <>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            "clickable": true,
            el: '.swiper-pagination',
            type: 'bullets'
          }}

          breakpoints={{
            640: {
              "slidesPerView": 3,
              "spaceBetween": 5
            },
            768: {
              "slidesPerView":3,
              "spaceBetween": 5
            },
            1024: {
              "slidesPerView": 3,
              "spaceBetween": 5
            },

          }}
          modules={[Pagination, Navigation]}
          className="clientSwiper"
        >
       </Swiper>
      

        <div className={styles.discover_sliders}>
          {tours?.map((tour, index) => (

            <SwiperSlide >
              <div key={index} className={styles.sliders_img}>
                <div >
                  <div className={styles.swiper_name}>
                    <h1>{tour.name}</h1>
                  </div>
                  <div className={styles.swiper_img}>
                    <img src={tour.thumbnail} />
                  </div>

                </div>
              </div>

            </SwiperSlide >


          ))
          }
        </div>
      
      </>
    </div>
  )
}

export default Discover;