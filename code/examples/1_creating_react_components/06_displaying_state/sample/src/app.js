import React, { Component, createElement } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { location: 'World' };
  }
  
  render() {
    const message = `Hello ${this.state.location}`;
    return createElement('div', null, message);
  }
}