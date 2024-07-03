import React, { useState,useEffect } from 'react';
import axios from "axios";
import {api} from "../api/api";

const Discover=()=> {
const [tours, setTour] = useState([]);

useEffect(()=>{
  
  // const fetchData = async()=>{
  //   try{
  //     const {response} = await api.get(`/list-tours`);
  //     setTour(response)
    
  //   } catch(error){
  //      console.log("error", error)
  //   }
  // };
  // fetchData();
  axios
   .get("https://muha-backender.org.kg/list-tours")
   .then((res)=>{
    console.log(res);
    setTour(res.data)
   })

},[])

  return (
    <div>
      <div className="discover_header">
        <h1>Discover</h1>
        <div className="discover_btns">
          <button>right</button>
          <button>left</button>
        </div>
      </div>
        <ul className="Categories">
            <li><a href="">Popular</a></li>
            <li><a href="">Featured</a></li>
            <li><a href="">Most Visited</a></li>
            <li><a href="">Europe</a></li>
        </ul>

        <div className="discover_sliders">
          {tours.map((tour, index)=>(
            <>
             <div key={index} className="first_img">
               <img src={tour.reviews.reviewer_photo} className="slider_img"/>
                <h1>{tour.name}</h1>
            </div>
            <div className="first_img">
               <img src="2" className="slider_img"/>
               <h1>Second Image</h1>
            </div>
           <div className="first_img">
              <img src="3" className="slider_img"/>
              <h1>Third Image</h1>
            </div>
            
            </>
            
          ))

          }
          
         </div>

    </div>
  )
}

export default Discover;