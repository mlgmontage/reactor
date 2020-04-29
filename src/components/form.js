import React from "react";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      car: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.name);
    console.log(this.state.car);
  }

  render() {
    return (
      <div>
        <h3>Forms</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
          ></input>
          <select name="car" onChange={this.handleChange}>
            <option value=""></option>
            <option value="volvo">Volvo</option>
            <option value="opel">Opel</option>
          </select>
        </form>
      </div>
    );
  }
}

export default Form;
