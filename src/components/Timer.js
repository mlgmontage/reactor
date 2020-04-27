import React from "react";

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { second: 0, minute: 0 };
  }

  tick() {
    this.setState((state) => ({
      second: state.second + 1,
    }));
  }

  minuteTick() {
    this.setState((state) => ({
      minute: state.minute + 1,
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    this.minute_interval = setInterval(() => this.minuteTick(), 1000 * 60);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.minute_interval);
  }

  render() {
    return (
      <div>
        <h3>Seconds: {this.state.second}</h3>
        <h3>Minutes: {this.state.minute}</h3>
      </div>
    );
  }
}

export default Timer;
