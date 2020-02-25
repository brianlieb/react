import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props) {
    super(props);
    
    console.log('constructor called...');
  }
  
  render() {
    return <div>Count: { this.props.count }</div>;
  }
}