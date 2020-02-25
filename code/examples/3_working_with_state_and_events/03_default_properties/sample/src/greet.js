import React, { Component } from 'react';

export default class Greet  extends Component {
  render() {
    return <div>
      Hello { this.props.name }, your names has { this.props.name.length } letters
    </div>;
  }
}

Greet.defaultProps = {
  name: 'there'
};