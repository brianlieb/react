import React, { Component } from 'react';

export default class Greet  extends Component {
  render() {
    return <div>
      Hello { this.props.name }, your names has { this.props.name.length } letters
    </div>;
  }
}
//take a look at the console in the browser