import React, { Component } from 'react';
import Greet from './greet';

export default class App extends Component {
  render() {
    return <div>
      <Greet name="Tom" />
      <Greet name="Jerry" />
      <Greet />
      <Greet name={ undefined }/>
      Don't dare send a null for name={ null }
    </div>;
  }
}