import React, { useState } from 'react';

function State() {
  //init State
  const [counter, setCounter] = useState(0);

  //Create Function Add
  function Add() {
    setCounter(counter + 1);
  }

  //Create Function Less
  function Less() {
    setCounter(counter - 1);
  }

  return (
    // Code Inside div
    <div>
      <h2>{counter}</h2>

      <button onClick={Add}>Add</button>
      <button onClick={Less}>Less</button>
    </div>
  );
}

export default State;
