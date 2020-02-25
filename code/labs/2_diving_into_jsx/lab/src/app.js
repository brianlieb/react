import  React, {Component} from 'react';

export default class App extends Component {

  componentDidMount() {
    this.startTimer();
  }

  startTimer() {
    this.intervalId = setInterval(() => this.setState({}), 1000);
  }

  stopTimer() {
    clearInterval(this.intervalId);
  }

  render() {
    const today = new Date();
    const text = ` ${today.toDateString()} ${today.toLocaleTimeString()} `;
    return <div>
      { text }
      <button onClick={() => this.stopTimer() }>Stop</button>
      <button onClick={() => this.startTimer() }>Start</button>
    </div>;
  }
}