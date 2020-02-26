import React, { Component } from 'react';
import Greet from './greet';

export default class App extends Component {
  render() {
    return <div>
      <Greet title="Greetings" />
      <Greet />
    </div>;
  }
}