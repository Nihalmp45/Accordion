import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [showInfo,setshowInfo] = useState(true)

  const handlechange=()=>{
    setshowInfo(!showInfo)
  }

  return(
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={handlechange}>
          {showInfo?<AiOutlineMinus /> : <AiOutlinePlus/>}
        </button>
      </header>
      <h4>{showInfo && <p>{info}</p>}</h4>
    </article>
  )
};

export default Question;
