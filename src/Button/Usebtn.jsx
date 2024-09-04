import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Todos from './Todos';

export const Usebtn = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = () => {
    setTodos((t) => [...t, "New Todo"]);
  };

  const add = useCallback(()=>{
    addTodo()
  },[todos])

  return (
    <>
      <Todos todos={todos} addTodo={add}/>
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  );;}
