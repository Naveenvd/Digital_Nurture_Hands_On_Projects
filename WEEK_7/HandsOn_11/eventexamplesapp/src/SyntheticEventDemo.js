import React from "react";

function SyntheticEventDemo() {
  const handleClick = (event) => {
    console.log("I was clicked");
    console.log("Synthetic Event Type:", event.type);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me (Synthetic Event)</button>
    </div>
  );
}

export default SyntheticEventDemo;
