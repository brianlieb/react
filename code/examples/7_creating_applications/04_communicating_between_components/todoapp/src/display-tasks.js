import React, { Component } from 'react';
import ListTasks from './list-tasks';

export default class DisplayTasks extends Component {
  render() {
    return <div>
      <span className="left"><ListTasks completed={ true } /></span>
      <span className="right"><ListTasks completed={ false } /></span>
    </div>;
  }
}