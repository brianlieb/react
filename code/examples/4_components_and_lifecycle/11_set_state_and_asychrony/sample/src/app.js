import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count: 0
    };
  }
  
  componentDidMount() {
    setInterval(() => this.change(), 5000);
  }
  
  change() {
    console.log(`at the start of change count is ${this.state.count}`);
    const count = this.state.count + 1;
    this.setState({ count });
    console.log(this.state.count);
    console.log(`at the end of change count is ${this.state.count}`);
    //this value of state may not be up to date
  }
  
  render() {
    return <div>Count: { this.state.count }</div>;
  }
}