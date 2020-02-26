import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    
    console.log('constructor called...');
    
    setInterval(() => this.setState({}), 1000);
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps called...');
    return null;
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    const take = Math.random() > 0.5;
    console.log(`shouldComponentUpdate called...${take}`);
  
    return take;
  }
  
  componentDidMount() {
    console.log('componentDidMount called...');
  }
  
  componentWillUnmount() {
    console.log('componentWillUnmount called...');
  }
  
  render() {
    console.log('render called...');
    return <div>Count: { this.props.count }</div>;
  }
}