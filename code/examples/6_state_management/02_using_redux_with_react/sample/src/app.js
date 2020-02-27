import React, { Component } from 'react';
import Task from './task';
import ListTasks from './list-tasks';
import AddTask from './add-task';
import store from './store';

export default class App  extends Component {
  componentDidMount() {
    this.setState({ tasks: store.getState() });

    this.unsubscribeFromRedux = 
      store.subscribe(() => this.setState({ tasks: store.getState() }));
  }
  
  componentWillUnmount() {
    this.unsubscribeFromRedux();
  }
  
  render() {
    return <div>
      <div><AddTask /></div>
      <span className="left">
        <ListTasks title="Pending" completed={ false } />
      </span>
      <span className="right">
        <ListTasks title="Completed" completed={ true } />
      </span>
    </div>;
  }
}
