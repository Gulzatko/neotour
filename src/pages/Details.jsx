import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


function Details() {
  const {id} = useParams();
  const [detailTrip, setDetailTrip]= useState();
   
  useEffect

  return (
    <div>Details</div>
  )
}

export default Details