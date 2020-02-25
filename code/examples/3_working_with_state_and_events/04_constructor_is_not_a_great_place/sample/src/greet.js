import React, { Component } from 'react';

export default class Greet  extends Component {
  constructor(props) {
    super(props);
    this.state = { when: props.when.toUpperCase() };
  }
  
  render() {
    return <div>
      Hello { this.props.name }, see you { this.state.when }
    </div>;
  }
}

Greet.defaultProps = {
  name: 'there'
};