import React, { Component, createElement } from 'react';
import DisplayCount from './displaycount';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = { count: 0 };
  }
  
  componentDidMount() {
    setInterval(() => this.increment(), 1000);
  }
  
  increment() {
    //this.setState({ count: this.state.count + 1 });
    
    //or
    //    const count = this.state.count + 1;
    //    
    //    this.setState({ count: count });

    //or
    const count = this.state.count + 1;
    
    this.setState({ count });
  }
  
  render() {
    return <div>
      <DisplayCount count={ this.state.count }/>
    </div>;
  }
}



