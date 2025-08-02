import React from "react";
import Counter from "./Counter";
import SayWelcome from "./SayWelcome";
import SyntheticEventDemo from "./SyntheticEventDemo";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Event Handling Examples</h1>
      <Counter />
      <hr />
      <SayWelcome />
      <hr />
      <SyntheticEventDemo />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
