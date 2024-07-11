import React,{useState} from 'react';
import styles from "./NumberOfPeople.module.scss";

const NumberOfPeople = ()=> {
    const [people, setPeople] = useState(0);

    const handleClick1=()=>{
      setPeople(people+1);
    }
    const handleClick2=()=>{
      setPeople(people-1);
    }
  return (
    <>
     <div className={styles.numberOfpeople} >
      <button onClick={handleClick1}>+</button>
         <div>
           {people}
         </div>
       <button onClick={handleClick2}>-</button>
     </div> 
     <div>
      <h3>{people}People</h3>
     </div>
    </>
    
  )
}

export default NumberOfPeople