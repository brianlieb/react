import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './person';

export default class Greet extends Component {
  constructor(props) {
    super(props);
    console.log('constructor called...');
  }
  
  render() {
    console.log(`render called...`);
    return <div>
      <h1>{ this.props.title }</h1>
    </div>;
  }
}

Greet.propTypes = {
  title: function(props, key, component) {
    if(/[A-Z]/.test(props[key][0])) {
      return null;
    }
    
    return new Error(`For the component ${component} property ${key}, you gave ${props[key]}. The first letter is not uppercase. How dare, we will come burn your village.`);
  }
};