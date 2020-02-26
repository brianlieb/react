import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Person from './person';

export default class Greet extends Component {
  render() {
    return <div>
      <h1>{ this.props.title }</h1>
      <ul>
      {
        this.props.people.map((person, i) => <li key={ i }>{ person.first }</li>)        
      }
      </ul>
    </div>;
  }
}

Greet.defaultProps = {
  title: 'Hello'
};

//It makes no sense to put a default (like above) and a isRequired
//for the same property (like below). The default kicks in if the value
//is not provided.

Greet.propTypes = {
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  names: PropTypes.array,
  people: PropTypes.arrayOf(PropTypes.instanceOf(Person))
};