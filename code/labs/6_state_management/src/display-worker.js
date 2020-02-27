import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store, {createToggleTime} from './store';

export default class DisplayWorkers extends Component {
  constructor(props) {
    super(props);
    this.state = {workers: []};
  }

  componentDidMount() {
    this.filterWorkers(this.props.fulltime);
    this.storeUnsubscribe = store.subscribe(() => this.filterWorkers(this.props.fulltime));
  }

  componentWillUnmount() {
    this.storeUnsubscribe();
  }


  filterWorkers(fulltime) {
    this.setState(
      {workers: store.getState().filter(w => w.fulltime === fulltime)});
  }

  toggleFullTime(worker) {
    store.dispatch(createToggleTime(worker));
  }

  render() {
    return <div>
      <h2>{ this.props.title }</h2>
      <table>
        <tbody>
        <tr><th>Last Name</th><th>First Name</th><th>Fulltime</th></tr>
        {
          this.state.workers.map(w => <tr key={ w.id } onClick={() => this.toggleFullTime(w)}><td>{ w.last }</td><td>{ w.first }</td><td>{ w.fulltime?'Full Time':'Part Time' }</td></tr>)
        }
        </tbody>
      </table>
    </div>;
  }
}

DisplayWorkers.defaultProps = {
  title: 'Please Set A Title',
};

DisplayWorkers.propTypes = {
  fulltime: PropTypes.bool,
  title: function(props, key, component) {
    if(props[key].split(' ')
      .every(word => /[A-Z]/.test(word[0]))) {
      return null;
    }

    return new Error(
      `Each word of ${key} for ${component} should be capitalized`);
  }
};
