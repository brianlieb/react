import React, { Component, createRef } from 'react';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      taskName: ''
    };
    
    this.taskNameRef = createRef();
  }
  
  addTask() {
    //this.props.createTask(this.taskNameRef.current.value);
    this.props.createTask(this.state.taskName);
    
    this.setState({ taskName: '' });
  }
  
  render() {
    return <div>
    <h5>Add a new task</h5>
    <input type="text" placeholder="some name" ref={ this.taskNameRef } value={ this.state.taskName } onChange={ e => this.setState({ taskName: e.target.value })}></input>
    <br/>
    <button onClick={ () => this.addTask() } disabled={ this.state.taskName.trim() === '' }>Create</button>
    </div>;
  }
}