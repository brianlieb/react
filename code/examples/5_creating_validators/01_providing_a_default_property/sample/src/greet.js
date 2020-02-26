import React, { Component } from 'react';

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