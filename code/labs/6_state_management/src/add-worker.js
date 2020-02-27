import React, { Component } from 'react';
import store, { createAddWorker } from './store';
import Worker from './worker';

export default class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = this.resetState();
  }

  addWorker() {
    store.dispatch(createAddWorker(this.makeWorkerFromState()));
    this.setState(this.resetState());
  }

  makeWorkerFromState() {
    return new Worker(store.getState().length+1, this.state.first, this.state.last, this.state.fulltime);
  }

  resetState() {
    return {
      first: '',
      last: '',
      fulltime: false
    };
  }

  render() {
    return <div>
      <h5>Add a new Worker</h5>
      <input type="text" placeholder="First Name" value={ this.state.first } onChange={ e => this.setState({...this.state, first: e.target.value })}></input>
      <br/>
      <input type="text" placeholder="Last Name" value={ this.state.last } onChange={ e => this.setState({...this.state,  last: e.target.value })}></input>
      <br/>
      Full Time: <input type="checkbox" checked={ this.state.fulltime } onClick={ e => this.setState({...this.state, fulltime: e.target.checked })}></input>
      <br/>
      <button onClick={ () => this.addWorker() } disabled={ this.state.first.trim() === ''||this.state.last.trim() === '' }>Create</button>
    </div>;
  }
}