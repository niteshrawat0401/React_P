import React, { useEffect, useRef } from "react";
import { useMemo } from "react";
import { useState } from "react";

export const UseMemo = () => {
  const [counter1, setCount1] = useState(0);
  const [counter2, setCount2] = useState(0);
  const [todo, setTodo] = useState([]);
  

  const counterone = () => {
    setCount1((counter1) => counter1 + 1);
  };
  const countertwo = () => {
    setCount2((counter2) => counter2 - 1);
  };

  const addTodo = ()=>{
    setTodo([...todo , 'Add this'])
  }

  // const isEven = useMemo(() => {
  //   console.log("abcd");
  //   let i = 0;
  //   while (i < 2000000000) i++;
  //   return counter1 % 2 === 0;
  // },[counter1])

  // const isEven = useMemo(() =>{
  //   let i=0;
  //   while(i < 100000000) i++;
  //   return counter1 % 2 == 0
  // }, [counter1])

  const expenseCallculation = (counter1)=>{
    for(let i=0;i<1000000000;i++){
      counter1 += i;
    }
    return counter1;
  }

  // const call = expenseCallculation(counter1)
  const call =  useMemo(()=>{
    expenseCallculation(counter1)
  },[counter1])

  


  return (
    <div>
      <div>{todo}</div>
      <button onClick={addTodo}>addTodo</button>
      <button onClick={counterone}>Count Inc: {counter1}</button>
      <div>{call}</div>
      {/* Storing cash value of even function*/}
      {/* <span>{isEven ? "Even" : "odd"}</span>
      <button onClick={countertwo}>Count Dec: {counter2}</button> */}
    </div>
  );
};
