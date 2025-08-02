// src/components/IndianPlayers.jsx
import React from 'react';

const IndianPlayers = () => {
  const T20players = ["Virat", "Rohit", "Surya", "Hardik"];
  const RanjiPlayers = ["Pujara", "Iyer", "Jadeja", "Ashwin"];

  const merged = [...T20players, ...RanjiPlayers]; // ES6 Merge

  const oddPlayers = merged.filter((_, index) => index % 2 !== 0);
  const evenPlayers = merged.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>Odd Team Players (Destructured)</h2>
      {oddPlayers.map((name, i) => (
        <div key={i}>{name}</div>
      ))}

      <h2>Even Team Players (Destructured)</h2>
      {evenPlayers.map((name, i) => (
        <div key={i}>{name}</div>
      ))}

      <h3>Merged Players</h3>
      <ul>
        {merged.map((player, index) => (
          <li key={index}>{player}</li>
        ))}
      </ul>
    </div>
  );
};

export default IndianPlayers;
