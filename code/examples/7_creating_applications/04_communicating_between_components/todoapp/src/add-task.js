import React, { Component } from 'react';
import Service from './service';
import store, { createRefresh } from './store';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      name: '',
      text: ''
    };
  }
  
  addTask() {
    Service.addTask(this.state.name)
      .then(text => this.setState({ text, name: '' }))
      .then(_ => Service.getTasks())
      .then(tasks => store.dispatch(createRefresh(tasks)));
  }
  
  render() {
    return <div>
      <div>{ this.state.text }</div>
      <input type="text" value={ this.state.name } onChange={ e => this.setState({name: e.target.value}) }></input>
      &nbsp;<button onClick={ () => this.addTask() } disabled={ this.state.name.trim() === '' }>Create</button>
    </div>;
  }
}