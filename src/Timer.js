import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 60, // Initial time in seconds
      isRunning: false,
    };
  }

  startTimer = () => {
    if (!this.state.isRunning) {
      this.timerInterval = setInterval(() => {
        this.setState((prevState) => ({
          time: prevState.time - 1,
        }));

        if (this.state.time === 0) {
          this.stopTimer();
        }
      }, 1000);

      this.setState({ isRunning: true });
    }
  };

  stopTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({ isRunning: false });
  };

  resetTimer = () => {
    clearInterval(this.timerInterval);
    this.setState({
      time: 60,
      isRunning: false,
    });
  };

  render() {
    return (
      <div>
        <div>Time: {this.state.time} seconds</div>
        <button onClick={this.startTimer} disabled={this.state.isRunning}>
          Start
        </button>
        <button onClick={this.stopTimer} disabled={!this.state.isRunning}>
          Stop
        </button>
        <button onClick={this.resetTimer}>Reset</button>
      </div>
    );
  }
}

export default Timer;
