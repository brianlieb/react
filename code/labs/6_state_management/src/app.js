import React, { Component } from 'react';
import DisplayWorkers from './display-worker';
import AddWorker from './add-worker';

export default class App extends Component {
  render() {
    return <div>
      <AddWorker />
      <DisplayWorkers title='Full Time Employees' fulltime={true}/>
      <DisplayWorkers title='PArt Time Employees' fulltime={false}/>
    </div>;
  }
}