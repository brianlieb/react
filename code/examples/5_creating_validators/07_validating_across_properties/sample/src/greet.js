import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Greet extends Component {
  render() {
    return <div>
      Hello { this.props.name1 } and { this.props.name2 }
    </div>;
  }
}

Greet.propTypes = {
  name1: function(props, key, component) {
    if(props[key] === props['name2']) {
      return new Error("values for name1 and name2 are the same.");
    }
    
    return null;
  }
}