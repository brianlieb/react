import React, { Component, createRef } from 'react';
import Service from './service';

export default class AddAirport extends Component {
  constructor(props) {  
    super(props);
    this.inputRef = createRef(); 
    
    this.state = {};
  } 
  
  addAirport(airportCode) {
    Service.add(airportCode)
      .then(txt => this.setState({message: txt}));
  }
  
  render() {
    return <div>
      <h2 className="main">Please enter airport code</h2>
      <input type="text" ref={ this.inputRef }></input>
      <button onClick={ () => this.addAirport(this.inputRef.current.value) }>Add</button>
      <p>{ this.state.message }</p>
    </div>;
  }
}