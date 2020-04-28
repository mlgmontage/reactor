import React from "react";

class Agregate extends React.Component {
  render() {
    return (
      <div>
        <h3>Agregate state of water is {waterState(this.props.degree)}</h3>
      </div>
    );
  }
}

function waterState(degree) {
  if (degree <= 0) {
    return "ice";
  } else if (degree >= 100) {
    return "vapor";
  } else {
    return "liquid";
  }
}

export default Agregate;
