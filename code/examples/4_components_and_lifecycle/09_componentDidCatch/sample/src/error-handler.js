import React, { Component } from 'react';

export default class ErrorHandler extends Component {
  componentDidCatch(error, info) {
    console.log('componentDidCatch called...');
    console.log(error);
    console.log(info);
  }
  
  render() {
    return this.props.children;
  }
}