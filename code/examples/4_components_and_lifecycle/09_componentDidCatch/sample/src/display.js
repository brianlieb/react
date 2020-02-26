import React, { Component } from 'react';

export default class Display extends Component {
  constructor(props) {
    super(props);

    this.state = { person: { name: 'Sam', age: 2 }};
    
    setTimeout(() => this.setState({ person: {}}), 5000);
  }
  
  render() {
    return <div>Any body home?
      { this.state.person.name } { this.state.person.name.length }</div>;
  }
}