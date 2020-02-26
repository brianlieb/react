import React, { Component } from 'react';
import Greet from './greet';
import Person from './person';

export default class App extends Component {
  render() {
    return <div>
      <Greet name1="Jack" name2="Jill" />
      <Greet name1="Jack" name2="Jack" />
    </div>;
  }
}