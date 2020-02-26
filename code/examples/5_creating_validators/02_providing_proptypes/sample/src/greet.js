import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greet extends Component {
  render() {
    return <div>
      <h1>{ this.props.title }</h1>
    </div>;
  }
}

Greet.defaultProps = {
  title: 'Hello'
};

Greet.propTypes = {
  title: PropTypes.string
};