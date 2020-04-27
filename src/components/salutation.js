import React from "react";

class Salutation extends React.Component {
  render() {
    return (
      <div>
        <h1>Mr. {this.props.lastname}</h1>
      </div>
    );
  }
}

export default Salutation;
