import { useState, useEffect } from 'react';
import './App.css';

export const App = () => {
  const [todoValue, settodoValue] = useState<String>('');
  const [todoList, setTodoList] = useState<String[]>([]);
  const addTask = () => {
    setTodoList((prevList) => [...prevList, todoValue]);
  };

  return (
    <>
      <h1>test</h1>
      <input type="text" onChange={(event) => settodoValue(event.target.value)}></input>
      <button onClick={addTask}>追加</button>
    </>
  );
};
