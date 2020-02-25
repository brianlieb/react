import React, { Component } from 'react';
import Greet from './greet';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { when: 'tomorrow' };
  }
  
  componentDidMount() {
    setTimeout(() => this.setState({ when: 'today' }), 2000);
  }
  
  render() {
    return <div>
      In the App, when is { this.state.when }
      <Greet name="Tom" when={ this.state.when } />
      <Greet name="Jerry" when="this evening"/>
    </div>;
  }
}