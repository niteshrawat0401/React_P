import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'

export const Usebtn = () => {
  const [count,setCount] = useState(0);
  var count1;
    const handleinc= useCallback(()=>{ 
      setCount(count+1);
      if(count==10){
        count= count+10
      }
      console.log("increment");
  })
    const handledec= useCallback(()=>{ 
      setCount(count-1);
      console.log("decrement");
  })
  return (
    <div>
      <h1 style={{marginTop:"2rem"}}>{count}</h1>
        <button onClick={handleinc}>Increment</button>
        <button onClick={handledec}>Decrement</button>
    </div>
  )
}
