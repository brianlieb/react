import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greet extends Component {
  render() {
    return <div>
      <h1>{ this.props.title }</h1>
      <ul>
      {
        this.props.names.map((name, i) => <li key={ i }>{ name }</li>)        
      }
      </ul>
    </div>;
  }
}

Greet.defaultProps = {
  title: 'Hello'
};

Greet.propTypes = {
  title: PropTypes.string,
  names: PropTypes.array
};