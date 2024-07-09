import React, { useState, useEffect } from 'react';
import axios from "axios";
import { api } from "../api/api";
import styles from './Discover.module.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Link, useParams} from 'react-router-dom'




const Discover = () => {
  const [tours, setTour] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  // const {id} = useParams();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    

    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
     
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
     
    }
  };

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
      
     <Carousel responsive={responsive} showDots={true}>
       <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <Link to="/id">
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
            </Link>
       
        {/* ))
          } */}
        </div>
    
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <Link to="/id">
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
              </Link>
        {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <Link to="/id">
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
              </Link>
       
        {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <Link to="/id">
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
              </Link>
       
        {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <Link to="/id">
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
              </Link>
       
        {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <Link to="/id">
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
              </Link>
       
        {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <Link to="/id">
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
            </Link>
        {/* ))
          } */}
        </div>
        <div className={styles.discover_sliders}>
          {/* {tours?.map((tour, index) => ( */}
          <Link to="/id">

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
              </Link>
       
        {/* ))
          } */}
        </div>
        </Carousel>
       
      </>
    </div>
  )
}

export default Discover;