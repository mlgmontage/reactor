import React from "react";
import Message from "./components/Message";
import Salutation from "./components/salutation";

function App() {
  return (
    <div className="App">
      <Message name="Jane" />
      <Message name="James" />
      <Message name="Hikaru" />
      <Salutation lastname="Hikaru" />
    </div>
  );
}

export default App;
