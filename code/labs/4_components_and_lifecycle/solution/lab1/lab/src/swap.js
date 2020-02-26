import React, { Component } from 'react';

export default class Swap extends Component {
  render() {
    if(this.props.children && this.props.children.length === 2) {
      if(this.props.showfirst) {
        return <span>{ this.props.children }</span>;        
      }
      
      return <span>{ this.props.children[1] }{ this.props.children[0] }</span>;
    }
    
    return 'Please provide two children';
  }
}

Swap.defaultProps = {
  showfirst: true
};