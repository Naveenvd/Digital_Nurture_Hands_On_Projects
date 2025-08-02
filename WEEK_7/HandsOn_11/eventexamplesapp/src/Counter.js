import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello();
    showMessage();
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const sayHello = () => {
    console.log("Hello");
  };

  const showMessage = () => {
    console.log("This is a static message");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default Counter;
