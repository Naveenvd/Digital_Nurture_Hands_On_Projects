import React from 'react';
import './App.css';

function App() {
  const heading = <h1 className="app-heading">🏢 Office Space Rental App</h1>;

  const officeImage = "https://via.placeholder.com/800x300?text=Office+Space";

  const offices = [
    { name: "GreenTech Tower", rent: 55000, address: "123 Business Bay, Mumbai" },
    { name: "BlueSky Plaza", rent: 75000, address: "45 Tech Street, Bangalore" },
    { name: "OceanView Center", rent: 60000, address: "Marine Drive, Kochi" },
    { name: "CloudSpace Hub", rent: 48000, address: "IT Park, Hyderabad" },
    { name: "Sunset Tower", rent: 85000, address: "CBD, Pune" }
  ];

  const officeList = offices.map((item, index) => {
    const rentStyle = {
      color: item.rent > 60000 ? 'green' : 'red',
      fontWeight: 'bold'
    };

    return (
      <div className="office-card" key={index}>
        <h2>{item.name}</h2>
        <p><strong>📍 Address:</strong> {item.address}</p>
        <p><strong>💰 Rent:</strong> <span style={rentStyle}>₹{item.rent}</span></p>
      </div>
    );
  });

  return (
    <div className="app-container">
      {heading}
      <img src={officeImage} alt="Office Space" className="office-image" />
      <h2 className="section-heading">Available Spaces:</h2>
      {officeList}
    </div>
  );
}

export default App;
