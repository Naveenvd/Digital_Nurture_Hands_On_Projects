import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const converted = (parseFloat(rupees) / 90).toFixed(2);
    setEuro(converted);
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter amount in INR"
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <p>{rupees} INR = €{euro}</p>}
    </div>
  );
}

export default CurrencyConvertor;
