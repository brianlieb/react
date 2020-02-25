import React, { Component } from 'react';

export default class DisplayCount  extends Component {
  render() {
    let display = '';
    if(this.props.show) {
      display = this.props.children;
    }
    
    return <div>
      { this.props.count }
      { display }
    </div>;
  }
}