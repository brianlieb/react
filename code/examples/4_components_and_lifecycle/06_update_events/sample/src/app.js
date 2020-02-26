import React, { Component } from 'react';
import Display from './display';

export default class App  extends Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 0 };
    
    //not good to do this in the constructor
    setInterval(() => this.increment(), 5000);
  }
  
  increment() {
    const count = this.state.count === 10 ? 0 : this.state.count + 1;
    
    this.setState({ count });
  }
  
  render() {
    const display = this.state.count === 0 ? '' 
      : <Display count={ this.state.count } />;
    
    return <div> { display } </div>;
  }
}