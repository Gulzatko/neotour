import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


export default function Details() {
  const {id} = useParams();
  const [detailTrip, setDetailTrip]= useState();
   
  

  return (
    <div>Details</div>
  )
}

