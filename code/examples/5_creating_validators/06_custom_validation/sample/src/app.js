import React, { Component } from 'react';
import Greet from './greet';
import Person from './person';

export default class App extends Component {
  render() {
    return <div>
      <Greet title="Greetings" />
      <Greet title="hello" />
    </div>;
  }
}