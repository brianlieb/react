import React, { Component } from 'react';
import Display from './display';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 1
    };
  }
  
  componentDidMount() {
    setInterval(() => this.setState({ count1: this.state.count1 + 1 }), 1000);
    setInterval(() => this.setState({ count2: this.state.count2 + 1 }), 5000);
  }
  
  render() {
    return <div>
      In App count1: { this.state.count1 } count2: { this.state.count2 }
     <Display count1={this.state.count1} count2={this.state.count2} />
    </div>;
  }
}