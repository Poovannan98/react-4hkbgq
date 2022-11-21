import React, { Component } from 'react';
import { CounterDataContext } from './Context';

class Counter3 extends Component {
  static contextType = CounterDataContext;
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <h3> This is Counter3 Component </h3>
        Initial Value : {this.context.initialValueFromProvider} <br /> <br />
        <button onClick={() => this.context.handleIncrementFromProvider()}>
          Increment
        </button>
        &nbsp;
        <button onClick={this.context.handleDecrementFromProvider}>
          Decrement
        </button>
        &nbsp;
        <button onClick={this.handleResetFromProvider}> Reset </button> &nbsp;
      </>
    );
  }
}

export default Counter3;
