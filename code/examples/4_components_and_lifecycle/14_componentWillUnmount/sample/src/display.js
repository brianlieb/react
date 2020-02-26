import React, { Component } from 'react';

export default class Display extends Component {
  componentDidMount() {
    this.intervalID = setInterval(() => this.setState({}), 1000);
  }
  
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  
  render() {
    const time = new Date().toLocaleTimeString();
    
    return <div>
     { time }
    </div>;
  }
}