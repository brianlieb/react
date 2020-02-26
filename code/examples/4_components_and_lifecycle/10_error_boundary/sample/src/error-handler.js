import React, { Component } from 'react';

export default class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      hasError: false
    };
  }
  
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }
  
  render() {
    if(this.state.hasError) {
      return "...render cat picture..."
    } 
    
    return this.props.children;
  }
}