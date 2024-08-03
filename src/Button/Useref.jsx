// import React from "react";
import {useRef, useEffect, useState } from "react";

// const Useref = () => {
//   const box = useRef(0);
//   const box1 = useRef(0);
//   const box2 = useRef(0);
//   const box3 = useRef(0);
//   const box4 = useRef(0);

//   const handleColor1 = () => {
//     box.current.style.backgroundColor = "#18c683";
//   };
//   const handleColor2 = () => {
//     box1.current.style.backgroundColor = "blue";
//   };
//   const handleColor3 = () => {
//     box2.current.style.backgroundColor = "yellow";
//   };
//   const handleColor4 = () => {
//     box3.current.style.backgroundColor = "pink";
//   };
//   const handleColor5 = () => {
//     box4.current.style.backgroundColor = "#44cdcd";
//   };

//   return (
//     <div>
//       <div>
//         <button style={{height:"2rem", width:"5%", borderRadius:"5px", marginTop:"4rem"}} onClick={handleColor1} ref={box4}>
//           Toggle1
//         </button>
//         <button style={{height:"2rem", width:"5%", borderRadius:"5px"}} ref={box3} onClick={handleColor2}>
//           Toggle2
//         </button>
//         <button style={{height:"2rem", width:"5%", borderRadius:"5px"}} ref={box} onClick={handleColor3}>
//           Toggle3
//         </button>
//         <button style={{height:"2rem", width:"5%", borderRadius:"5px"}} ref={box1} onClick={handleColor4}>
//           Toggle4
//         </button>
//         <button style={{height:"2rem", width:"5%", borderRadius:"5px"}} ref={box2} onClick={handleColor5}>
//           Toggle5
//         </button>
//       </div>
//     </div>
//   );
// };
// const { useState, useRef, useEffect } = React;

const Useref = () => {
  const inputref = useRef();

  const focusit = ()=>{
    inputref.current.focus()
  }
  // const [isEditing, setEditing] = useState(false);
  // const toggleEditing = () => {
  //   setEditing(!isEditing);
  // };
  // const inputRef = useRef(null);
  
  // useEffect(()=>{
  //   if(isEditing){
  //     inputRef.current.focus();
  //   }
  // }, [isEditing])
  
  return (
    <div>
       <input ref={inputref} />
       <button onClick={focusit}>Edit</button>
     </div>
  );
};

export default Useref;
