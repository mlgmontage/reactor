import React from "react";

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      degree: 0,
      radian: 0,
    };
    this.handleInput = this.handleInput.bind(this);
    this.convert = this.convert.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  convert(e) {
    e.preventDefault();
    this.setState((state) => ({
      radian: this.state.degree * (Math.PI / 180),
    }));
  }

  render() {
    return (
      <div>
        <h3>Angle Converter</h3>
        <form onSubmit={this.convert}>
          <label>
            degree:{" "}
            <input
              onChange={this.handleInput}
              value={this.state.degree}
              name="degree"
            ></input>
          </label>
          |
          <label>
            radian:{" "}
            <input
              onChange={this.handleInput}
              value={this.state.radian}
              disabled
              name="radian"
            ></input>
          </label>
          <br />
          <button onClick={this.convert}>convert</button>
        </form>
      </div>
    );
  }
}

export default Converter;
