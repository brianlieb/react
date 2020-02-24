import React, { Component, createElement } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { location: 'World' };
  }
  
  componentDidMount() {
    //setTimeout(() => this.state.location = "Universe", 5000);
      //don't do this
      
    //never write to state directly anywhere other than the constructor
    //never use setState in the constructor.
    
    setTimeout(() => this.setState({ location: 'Universe'}), 5000);
  }
  
  render() {
    const message = `Hello ${this.state.location}`;
    return createElement('div', null, message);
  }
}