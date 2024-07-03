import React, { useState,useEffect } from 'react';
import axios from "axios";
import {api} from "../api/api";

const Discover=()=> {
const [tour, setTour] = useState([]);

useEffect(()=>{
  
  const fetchData = async()=>{
    try{
      const {response} = await api.get(`list-tours`);
      setTour(response)
    
    } catch(error){
       console.log("error", error)
    }
  };
  fetchData();
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
           <div className="first_img">
               <img src="1" className="slider_img"/>
                <h1>First Image</h1>
            </div>
            <div className="first_img">
               <img src="2" className="slider_img"/>
               <h1>Second Image</h1>
            </div>
           <div className="first_img">
              <img src="3" className="slider_img"/>
              <h1>Third Image</h1>
            </div>
         </div>

    </div>
  )
}

export default Discover;