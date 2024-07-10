import React,{useState} from 'react';

const NumberOfPeople = ()=> {
    const [people, setPeople] = useState(0);
  return (
    <>
      <button>+</button>
         <div>
        {people}
    </div>
    <button>-</button>
    </>
  )
}

export default NumberOfPeople