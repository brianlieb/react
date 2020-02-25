import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 1 };
  }
  
  changeCount() {
    console.log(this);
    this.setState({ count: this.state.count + 1});
  }
  
  render() {
    return <div>
      Count: { this.state.count }
      <div><button onClick={ this.changeCount }>Click me</button></div>
      This will not work - the changeCount is called in the context of
      a different object and not the component.
    </div>;
  }
}