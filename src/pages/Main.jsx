import React from 'react';
import{Vacation} from '../Components/Vacation';
import {Discover} from '../Components/Discover';
import {Recomended} from '../Components/Recomended';

const Main =()=> {

    return (
      <div>
        <Vacation/>
         <Discover/>
         <Recomended/>
      </div>
    )
  }


export default Main;