 import React,{useRef} from "react";
 import styles from "../styles/Vacation.module.scss";
 import Discover from './Discover';
import Recomended from './Recomended';

export default function Vacation() {
  const swiperRef = useRef(null);

  const handleClick=(e)=>{
    e.preventDefault();
    swiperRef.current.scrollIntoView({ behavior:"smooth"});
};
  return (
    <>
     <div className={styles.vacation_container}>
       <div className={styles.vacation_text}>
        <div className={styles.vacation_title}>
          <span className={styles.vacation_title_h1}>Winter <br/> Vacation Trips</span>
        </div>
        <div className={styles.vacation_p}>
          <p>
            Enjoy your winter vacations with warmth and amazing sightseeing on
            the mountains. Enjoy the best experience wuth us!
         </p>
        </div>
        <div className={styles.vacation_btn}>
            <button onClick={handleClick}>Let's Go!</button>
        </div>
      </div>
      <div className={styles.vacation_img}>
        <img src="./imgs/hero.svg" alt=""/>
      </div>
    </div>
      <div>
      <Discover ref={swiperRef}/>
      </div>
      <Recomended/>

     
      

    </>
   
  );
}


