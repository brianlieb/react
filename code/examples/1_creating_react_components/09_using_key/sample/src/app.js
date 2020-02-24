import React, { Component, createElement } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      location: 'World',
      numbers: [1, 2, 3, 4, 5, 6]
    };
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
    
    //be careful what to choose for a key, it has to be
    //unique among siblings, and more important, consistent
    //across updates to the elements
    const li = this.state.numbers.map((e, index) => 
      createElement('li', { key: index }, e));
    
    return createElement('div', null, 
      createElement('div', null, message),
      createElement('ul', null, li));
  }
}


