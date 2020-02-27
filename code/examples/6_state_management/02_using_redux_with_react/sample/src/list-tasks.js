import React, { Component } from 'react';
import Task from './task';
import store, { createToggleCompleted } from './store';

export default class ListTasks extends Component {
  toggleCompleted(task) {
    store.dispatch(createToggleCompleted(task.id));
  }
  
  render() {
    const tasks = store.getState()
      .filter(task => task.completed === this.props.completed);
    
    return <div>
      <h3>{ this.props.title }</h3>
      <ul>
      {
        tasks.map(task => <li key={ task.id} onClick={ () => this.toggleCompleted(task) }>
          { task.name }
        </li>)
      }
      </ul>
    </div>;
  }
}