import React, { Component } from 'react';
import Task from './task';
import ListTasks from './list-tasks';
import AddTask from './add-task';

export default class App  extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tasks: [
        new Task(1, "start project", true),
        new Task(2, "write test", false),
        new Task(3, "write minimum code", false),
      ]
    };
  }
  
  toggleCompleted(taskToChange) {
    const tasks = this.state.tasks
      .map(task => task.id !== taskToChange.id ?
          task : 
            Object.assign(new Task(), taskToChange, 
              { completed: !taskToChange.completed }));

    this.setState({ tasks });
  }
  
  addTask(taskName) {
    const task = new Task(this.state.tasks.length + 1, taskName, false);
    
    this.setState({ tasks: [...this.state.tasks, task]});
  }
  
  render() {
    return <div>
      <div><AddTask
        createTask={ (taskName) => this.addTask(taskName) } /></div>
      <span className="left">
        <ListTasks tasks={ this.state.tasks } title="Pending" completed={ false } toggleCompleted={ task => this.toggleCompleted(task) } />
      </span>
      <span className="right">
        <ListTasks tasks={ this.state.tasks } title="Completed" completed={ true } toggleCompleted={ task => this.toggleCompleted(task) } />
      </span>
    </div>;
  }
}
