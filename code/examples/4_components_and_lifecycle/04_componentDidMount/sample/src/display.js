import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    
    console.log('constructor called...');
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called...');
    return null;
  }
  
  componentDidMount() {
    console.log('componentDidMount called...');
  }
  
  render() {
    console.log('render called...');
    return <div>Count: { this.props.count }</div>;
  }
}