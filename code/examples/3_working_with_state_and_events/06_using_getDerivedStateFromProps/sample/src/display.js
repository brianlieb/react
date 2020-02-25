import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }
  
  static getDerivedStateFromProps(prop, state) {
    //we may use the current state and new props to build
    //new partial state.
    
    //return null; //if there is no state change, return null;
    
    //making this more complex than it should be, just to illustate
    //how state may evolve
    
    const newState = {};
    
    if(prop.count1 !== state.origCount1) {
      newState.origCount1 = prop.count1;
      newState.count1 = prop.count1 * 10;
    }

    if(prop.count2 !== state.origCount2) {
      newState.origCount2 = prop.count2;
      newState.count2 = prop.count2 * 100;
    }
    
    //newState is a partial new state
    console.log(newState);
    
    return newState; //this state is merged with current state    
    //to create the new state
  }
  
  render() {
    return <div>
      <p>Count1: { this.state.count1 }</p>
      <p>Count2: { this.state.count2 }</p>
    </div>;
  }
}