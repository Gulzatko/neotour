import React,{useState} from 'react';
import styles from "./NumberOfPeople.module.scss";

const NumberOfPeople = ()=> {
    const [people, setPeople] = useState(0);
  return (
    <div className={styles.numberOfpeople} >
      <button>+</button>
         <div>
        {people}
         </div>
    <button>-</button>
    </div>
  )
}

export default NumberOfPeople