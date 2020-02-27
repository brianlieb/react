import React, { Component } from 'react';
import Service from './service';
import store, { createRefresh } from './store';

export default class ListTasks extends Component {
  toggleCompleted(taskId) {
    Service.toggleCompleted(taskId)
      .then(_ => Service.getTasks())
      .then(tasks => store.dispatch(createRefresh(tasks)));
  }
  
  render() {
    const title = this.props.completed ? 'Completed Tasks' : 'Pending Tasks';
    
    const tasks = store.getState().filter(task =>
      task.completed === this.props.completed);
    
    return <div>
      <h1>{ title }</h1>
      
      <ul>
        {
          tasks.map(task => <li key={ task.id }>
            <input type="checkbox" checked={ task.completed }
            onChange={ () => this.toggleCompleted(task.id) } />
            { task.name }
          </li>)
        }
      </ul>
    </div>;
  }
}