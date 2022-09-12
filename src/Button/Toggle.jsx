import React from "react";
import { useState } from "react";

export const Toggle = () => {
  const [show, setShow] = useState(true);

  const handleClick = ()=>{
    setShow(!show)
  }

  return (
    <div>
      <div>
         {
          show ? <h2 style={{color:"blue"}}>I am Nitesh Singh Rawat</h2>
          :
          <h2 style={{color:"red"}}>Open Name</h2>
         }
         </div>
      <button style={{width: "6%"}} onClick={handleClick}>Toggle</button>
    </div>
  );
};
