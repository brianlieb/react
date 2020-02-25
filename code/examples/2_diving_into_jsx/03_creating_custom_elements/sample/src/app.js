import React, { Component, createElement } from 'react';
import Greet from './greet';

export default class App extends Component {
  render() {
    return <div>
      <Greet name="Sara" />
      <Greet name="Joe" />
    </div>;
  }
}



