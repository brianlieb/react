import { Component, createElement } from 'react';

export default class App extends Component {
  componentDidMount() {
    setInterval(() => this.setState({}), 1000);
  }
  
  render() {
    const today = new Date();
    
    const text = `${today.toDateString()} ${today.toLocaleTimeString()}`;
    
    return createElement('div', null, text);
  }
}
