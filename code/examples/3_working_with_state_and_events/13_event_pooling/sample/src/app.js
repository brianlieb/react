import React, { Component } from 'react';

export default class App extends Component {
  process(e) {
    console.log(`You clicked on ${e.target.textContent}`);
    
    setTimeout(() => `You clicked on ${e.target.textContent}`, 2000);
  }
  
  render() {
    return <div>
      <span onClick={ e => this.process(e) }>Hello</span>
      <p>Click on the word Hello</p>
      <p>This code fails because we are trying to use the event object
      after it has been released - event pooling</p>
    </div>;
  }
}