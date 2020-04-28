import React, { useState, useEffect } from "react";

function Count() {
  // Returns a pair
  // first element data
  // second is a mutator
  const [count, setCount] = useState(420);

  // Similar to componentDidMount
  useEffect(() => {
    document.title = `React ${count}`;
  });

  return (
    <div>
      <h2>count {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
    </div>
  );
}

export default Count;
