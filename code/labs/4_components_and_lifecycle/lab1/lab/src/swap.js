import React, {Component} from 'react';

export default  class Swap extends Component {

  constructor(props) {
    super(props);
  }

  content() {
    if (this.props.showfirst) {
      return <div>{this.props.children}</div>;
    }
    return <div>{this.props.children[1]}{this.props.children[0]}</div>;
  }

  render() {

    if (this.props.children && this.props.children.length === 2) {
      return this.content();
    }

    return 'Please provide two children';
  }
}

Swap.defaultProps = {
  showfirst: true
}