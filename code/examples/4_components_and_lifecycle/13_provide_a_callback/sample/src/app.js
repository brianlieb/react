import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      left: 0,
      right: 0
    };
  }
  
  changeLeft() {
    this.setState({ left: this.state.left + 1 },
      () => console.log(`In the callback `, this.state));
    console.log(this.state);
  }

  changeRight() {
    this.setState({ right: this.state.right + 1 },
      () => console.log(`In the callback `, this.state));
    console.log(this.state);
  }
  
  render() {
    console.log('render called...');
    return <div>
      left: { this.state.left } right: { this.state.right }
      <p>
      <button onClick={ () => this.changeLeft() }>Left</button>
      <button onClick={ () => this.changeRight() }>Right</button>
      </p>
    </div>;
  }
}