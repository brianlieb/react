import React, { Component } from 'react';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import AddTask from './add-task';
import DisplayTasks from './display-tasks';

export default class App extends Component {
  render() {
    return <div>
      <h1 className="main">Your Tasks</h1>
      <BrowserRouter>
        <div>
          <nav>
            <NavLink to="/add">Add Task</NavLink> | <NavLink to="/display">Display Tasks</NavLink>
          </nav>
          <hr/>
          Number of tasks: 0
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