import React from "react";

function App() {
  const offices = [
    { name: "Tech Hub", rent: 55000, address: "Bangalore" },
    { name: "Startup Zone", rent: 70000, address: "Chennai" },
    { name: "WorkNest", rent: 60000, address: "Hyderabad" }
  ];

  return (
    <div>
      <h1>Office Space Rental App</h1>
      <img
        src="/office.jpg"
        alt="Desks and computers arranged in a modern office workspace, bright lighting and welcoming atmosphere, people collaborating, large windows showing city buildings, mood is productive and friendly"
        width={300}
        height={200}
        style={{ objectFit: "cover" }}
      />

      {offices.map((office, index) => (
        <div key={index} style={{ margin: "20px 0" }}>
          <h3>{office.name}</h3>
          <p>Address: {office.address}</p>
          <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
