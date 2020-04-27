import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ["hello", "world"], text: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      items: this.state.items.concat(this.state.text),
      text: "",
    }));
  }

  render() {
    return (
      <div>
        <h2>Todo app</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.text}
          ></input>
          <button onClick={this.handleSubmit}>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
