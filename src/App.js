import React, { useState } from 'react';
import './style.css';
import Counter1 from './Counter1';
import { CounterDataContext } from './Context.js';

export default function App() {
  const [initialValue, setInitialValue] = useState(5);
  const handleIncrement = () => {
    setInitialValue(initialValue + 1);
  };
  const handleDecrement = () => {
    setInitialValue(initialValue - 1);
  };
  const handleReset = () => {
    setInitialValue(5);
  };
  return (
    <div>
      <h3> This is App Component </h3>
      Initial Value : {initialValue} <br /> <br />
      <button onClick={handleIncrement}> Increment </button> &nbsp;
      <button onClick={handleDecrement}> Decrement </button> &nbsp;
      <button onClick={handleReset}> Reset </button> &nbsp;
      <CounterDataContext.Provider
        value={{
          initialValueFromProvider: initialValue,
          handleIncrementFromProvider: handleIncrement,
          handleDecrementFromProvider: handleDecrement,
          handleResetFromProvider: handleReset,
        }}
      >
        <Counter1 />
      </CounterDataContext.Provider>
    </div>
  );
}
