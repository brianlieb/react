import React, { Component } from 'react';
import Greet from './greet';
import Person from './person';

export default class App extends Component {
  render() {
    return <div>
      <Greet title="Greetings" people={ [new Person('Tom', 'Cat'), new Person('Jerry', 'Mouse')] }/>
      <Greet title="Greetings" people={ ['Tom', 'Jerry'] }/>
    </div>;
  }
}