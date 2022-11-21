import React, { Component } from 'react';
import { CounterDataContext } from './Context';
import Counter3 from './Counter3';

class Counter2 extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <CounterDataContext.Consumer>
        {(providedValues) => {
          return (
            <>
              <h3> Counter 2 Component </h3>
              Initial Value : {
                providedValues.initialValueFromProvider
              } <br /> <br />
              <button onClick={providedValues.handleIncrementFromProvider}>
                Increment
              </button>
              &nbsp;
              <button onClick={providedValues.handleDecrementFromProvider}>
                Decrement
              </button>
              &nbsp;
              <button onClick={providedValues.handleResetFromProvider}>
                Reset
              </button>
              &nbsp;
              <Counter3 />
            </>
          );
        }}
      </CounterDataContext.Consumer>
    );
  }
}

export default Counter2;
