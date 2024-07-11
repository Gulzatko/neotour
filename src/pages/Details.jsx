import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Modal from '../Components/Modal';
import styles from "../pages/Detail.module.scss";

export default function Details(){
  const {id} = useParams();
  const navigate = useNavigate();
  const [detailTrip, setDetailTrip] = useState();
  
  const goBack=() => navigate(-1);
   return(
     <div className={styles.detail}>
      <div className={styles.detail__img}>
        <img src='./imgs/Montana.png'/> 
        <div className={styles.goBack_btn}>
        <button  onClick={goBack}>Go back</button>
        </div>
        </div>
      <div className={styles.detail__text}>
           <div className={styles.detail__country}>
             <h1>Tour Name</h1>
              <h3>Country</h3>
           </div>
           
            <div className={styles.detail__description}>
            <div className={styles.detail__title}>
               <h1>Description</h1>
           </div>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Deserunt cumque inventore, perferendis quasi explicabo, 
              ipsum ducimus consequuntur blanditiis eaque, maxime voluptates officiis.
               Ullam labore incidunt, expedita cum blanditiis eveniet voluptate nulla 
              libero totam nemo doloribus minus sequi nisi eaque quidem, harum tenetur 
              ipsam commodi beatae, numquam dignissimos. Earum, eaque vero?
             </p>
           </div>
            <div className={styles.details__reviews}>
             <h2>Reviews</h2>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, natus?</p>
          
             <h2>Reviews</h2>
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, natus?</p>
            </div>

         <div className={styles.booking}>
            <Modal/>
       </div>
      

    </div>
    
  </div>
  )
}

