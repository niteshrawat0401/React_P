import React from "react";
import { useMemo } from "react";
import { useState } from "react";

export const UseMemo = () => {
  const [counter1, setCount1] = useState(0);
  const [counter2, setCount2] = useState(0);

  const counterone = () => {
    setCount1((counter1) => counter1 + 1);
  };
  const countertwo = () => {
    setCount2((counter2) => counter2 - 1);
  };

  const isEven = () => {
    console.log("abcd");
    let i = 0;
    while (i < 2000000000) i++;
    return counter1 % 2 === 0;
  }

  return (
    <div>
      <button onClick={counterone}>Count Inc: {counter1}</button>
      {/* Storing cash value of even function*/}
      <span>{isEven() ? "Even" : "odd"}</span>
      <button onClick={countertwo}>Count Dec: {counter2}</button>
    </div>
  );
};
