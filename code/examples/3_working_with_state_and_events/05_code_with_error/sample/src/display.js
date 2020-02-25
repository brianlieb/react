import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: this.props.count1 * 10,
      count2: this.props.count2 * 100
    }
  }
  
  render() {
    return <div>
      <p>Count1: { this.state.count1 }</p>
      <p>Count2: { this.state.count2 }</p>
    </div>;
  }
}