import React from "react";

function SayWelcome() {
  const welcomeMessage = (msg) => {
    alert(`You said: ${msg}`);
  };

  return (
    <div>
      <button onClick={() => welcomeMessage("welcome")}>Say Welcome</button>
    </div>
  );
}

export default SayWelcome;
