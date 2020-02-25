import React, { Component } from 'react';

export default class DisplayCount  extends Component {
  render() {
    return <div>{ this.props.count }</div>;
  }
}