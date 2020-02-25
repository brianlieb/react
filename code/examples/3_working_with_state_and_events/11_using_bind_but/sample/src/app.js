import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 1 };
    
    this.changeCountBound = this.changeCount.bind(this);
  }
  
  changeCount() {
    console.log(this);
    this.setState({ count: this.state.count + 1});
  }
  
  render() {
    return <div>
      Count: { this.state.count }
      <div><button onClick={ this.changeCountBound }>Click me</button></div>
    </div>;
  }
}