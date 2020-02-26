import React, { Component } from 'react';
import Task from './task';

export default class ListTasks extends Component {
  render() {
    const tasks = this.props.tasks
      .filter(task => task.completed === this.props.completed);
    
    return <div>
      <h3>{ this.props.title }</h3>
      <ul>
      {
        tasks.map(task => <li key={ task.id} onClick={ () => this.props.toggleCompleted(task) }>
          { task.name }
        </li>)
      }
      </ul>
    </div>;
  }
}