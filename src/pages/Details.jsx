import React, { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import Modal from '../Components/Modal'

export default function Details() {
  const {id} = useParams();
  const navigate = useNavigate();
  const [detailTrip, setDetailTrip] = useState();
  
  const goBack=() => navigate(-1);

  return (
    <div className="detail">
      <div className="detail_img">
        <img src='./imgs/Montana.png' />
      </div>
      <div className="detail_title">
        <h1>Description</h1>
      </div>
      <div className="detail_description">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Deserunt cumque inventore, perferendis quasi explicabo, 
          ipsum ducimus consequuntur blanditiis eaque, maxime voluptates officiis.
           Ullam labore incidunt, expedita cum blanditiis eveniet voluptate nulla 
           libero totam nemo doloribus minus sequi nisi eaque quidem, harum tenetur 
           ipsam commodi beatae, numquam dignissimos. Earum, eaque vero?
          </p>
      </div>
      <div className="details_reviews">
        <h2>Reviews</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, natus?</p>
      </div>
      <div className="details_reviews">
      <h2>Reviews</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, natus?</p>
      </div>

       <div className="booking">
         <Modal/>
       </div>
       <div className="goBack_btn">
        <button onClick={goBack}>Go back </button>
       </div>


    </div>
  )
}

