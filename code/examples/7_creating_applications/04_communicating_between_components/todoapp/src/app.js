import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import AddTask from './add-task';
import DisplayTasks from './display-tasks';
import Service from './service';
import Task from './task';
import store, { createRefresh } from './store';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
  }
  
  componentDidMount() {
    store.subscribe(() => this.setState({}));
    
    Service.getTasks()
      .then(tasks =>
        tasks.map(task => new Task(task.id, task.name, task.completed)))
      .then(tasks => store.dispatch(createRefresh(tasks)))
      .catch(error => this.handleError(error));
  }
  
  handleError(error) {
    this.setState({ error: error.message });
  }
  
  render() {
    if(this.state.error) {
      return <div>{ this.state.error }</div>;
    }
    
    return <div>
      <h1 className="main">Your Tasks</h1>
      <BrowserRouter>
        <div>
          <nav>
            <NavLink to="/add">Add Task</NavLink> | <NavLink to="/display">Display Tasks</NavLink>
          </nav>
          <hr/>
          <h2>Number of tasks: { store.getState().length }</h2>
          <div>
            <Route exact path="/" component={ DisplayTasks }></Route>
            <Route path="/add" component={ AddTask }></Route>
            <Route path="/display" component={ DisplayTasks }></Route>
          </div>
        </div>
      </BrowserRouter>
    </div>;
  }
}