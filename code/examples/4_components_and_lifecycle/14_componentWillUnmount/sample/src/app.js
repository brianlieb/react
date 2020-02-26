import React, { Component } from 'react';
import Display from './display';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { show: true };
  }
  
  render() {
    const display = this.state.show ? <Display /> : '';
    
    return <div>
      <button onClick={ () => this.setState({ show: !this.state.show })}>Show</button>
      { display }      
    </div>;
  }
}