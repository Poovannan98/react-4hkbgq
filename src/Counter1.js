import React, { useContext } from 'react';
import { CounterDataContext } from './Context';
import Counter2 from './Counter2';

function Counter1() {
  const consumedValues = useContext(CounterDataContext);
  return (
    <>
      <h3> Counter 1 Component </h3>
      Initial Value : {consumedValues.initialValueFromProvider} <br /> <br />
      <button onClick={consumedValues.handleIncrementFromProvider}>
        Increment
      </button>
      &nbsp;
      <button onClick={consumedValues.handleDecrementFromProvider}>
        Decrement
      </button>
      &nbsp;
      <button onClick={consumedValues.handleResetFromProvider}> Reset </button>
      <Counter2 />
    </>
  );
}

export default Counter1;
