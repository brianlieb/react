import React, { Component, createElement } from 'react';
import Display from './display';

export default class App extends Component {
  constructor(props) {
    super(props);
          
    this.state = { data: [] };
  }                           

  componentDidMount() {  
    this.change();
  }                         
  
  change() {
    setTimeout(() => this.change(), 1000);
    
    const data = this.state.data.slice();
    
    const newItem = data.length + 1;
    
    this.setState({ data: [...data, newItem] });
  }

  render() {
    return <div>
       <h1>Let's Scroll</h1>
       <p>If you view the last element, you get auto scroll.
       Otherwise, you are not distracted from viewing the
       content you like anywhere in the list.</p>
       <div>Some content here.</div>
       <Display value={ this.state.data }></Display>
       <div>Some other content here.</div>
     </div>;
  }
}