import React, { Component } from 'react';

export default class App extends Component {
  process(e) {
    const info = e.target.textContent;
    
    console.log(`You clicked on ${info}`);
    
    setTimeout(() => console.log(`You clicked on ${info}`), 2000);
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