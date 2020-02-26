import React, { Component } from 'react';
import Display from './display';
import ErrorHandler from './error-handler';

export default class App extends Component {
  render() {
    return <ErrorHandler>
      <Display />
    </ErrorHandler>;
  }
}