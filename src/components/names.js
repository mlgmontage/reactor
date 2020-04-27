import React from "react";
import Name from "./name";
import list from "../data/hard";

class Names extends React.Component {
  render() {
    return (
      <div>
        <h4>names</h4>
        <ul>
          <Name name="Hikaru" />
          {list.data.map((name) => (
            <Name name={name.name} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Names;
