import React from "react";
import Message from "./components/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Message name="Jane" />
      <Message name="James" />
      <Message name="Hikaru" />
    </div>
  );
}

export default App;
