import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], todoname: "", description: "" };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState((state) => ({
      items: this.state.items.concat({
        todoname: this.state.todoname,
        description: this.state.description,
      }),
      todoname: "",
      description: "",
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
            value={this.state.todoname}
            name="todoname"
          ></input>
          <br></br>
          <input
            value={this.state.description}
            onChange={this.handleInput}
            name="description"
          ></input>
          <br></br>
          <button onClick={this.handleSubmit}>
            Add #{this.state.items.length + 1}
          </button>
        </form>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>
              {item.todoname} - {item.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Todo;
