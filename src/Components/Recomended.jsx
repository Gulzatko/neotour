import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
 

export default function Recomended(){

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
          console.log(res,"recommended")
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
         <h1 >Recomended</h1>
      </div>
       <>
          <div >
          {recTours?.map((tour, index) => (
               <div key={index}>
                 <h1>{tour.name}</h1>
                 <img src={tour.thumbnail} alt="" />
                </div>
          ))
          }
        </div>
      
      </>
    </div>
    )
  }


