import React, { Component } from 'react';
import store, { createAddTask } from './store';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    
    this.state = { taskName: '' };
  }
  
  addTask() {
    store.dispatch(createAddTask(this.state.taskName));
    
    this.setState({ taskName: '' });
  }
  
  render() {
    return <div>
    <h5>Add a new task</h5>
    <input type="text" placeholder="some name" value={ this.state.taskName } onChange={ e => this.setState({ taskName: e.target.value })}></input>
    <br/>
    <button onClick={ () => this.addTask() } disabled={ this.state.taskName.trim() === '' }>Create</button>
    </div>;
  }
}