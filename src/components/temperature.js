import React from "react";

class Temperature extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 0,
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState((state) => ({
      degree: this.state.degree + 10,
    }));
  }

  decrement() {
    this.setState((state) => ({
      degree: this.state.degree - 10,
    }));
  }

  render() {
    return (
      <div>
        <h3>Water temperature {this.state.degree}</h3>
        <div>
          <button onClick={this.increment}>up</button>
          <button onClick={this.decrement}>down</button>
        </div>
      </div>
    );
  }
}

export default Temperature;
