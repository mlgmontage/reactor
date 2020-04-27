import React from "react";
import Name from "./name";
import list from "../data/hard";

class Names extends React.Component {
  render() {
    return (
      <div>
        <h3>names</h3>
        <ul>
          {list.data.map((name) => (
            <Name name={name.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Names;
