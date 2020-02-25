import React, { Component, createElement } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      location: 'World',
      numbers: [1, 2, 3, 4, 5, 6]
    };
  }
  
  componentDidMount() {
    setTimeout(() => this.setState({ location: 'Universe'}), 5000);
  }
  
  render() {
//    const message = `Hello ${this.state.location}`;
//    
//    const li = this.state.numbers.map((e, index) => 
//      createElement('li', { key: index }, e));
//    
//    return createElement('div', null, 
//      createElement('div', null, message),
//      createElement('ul', null, li));

    return <div>
      <div style={{ color: 'red' }}>Hello { this.state.location }</div>
      <ul>{
        this.state.numbers.map((e, i) => <li key={ i }>{ e }</li>)
      }</ul>
    </div>;
  }
}



