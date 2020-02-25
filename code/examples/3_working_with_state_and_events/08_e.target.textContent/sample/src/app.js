import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 1 };
  }
  
  render() {
    return <div>
      Count: { this.state.count }
      <span onClick={ e => alert(`You clicked on ${e.target.textContent}`) }>Hello</span>
      <div><button onClick={ () => alert('hello') }>Click me</button></div>
      Click on the other Hello
    </div>;
  }
}