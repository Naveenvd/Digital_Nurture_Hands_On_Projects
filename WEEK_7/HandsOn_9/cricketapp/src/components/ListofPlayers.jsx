
import React from 'react';

const players = [
  { name: "Virat", score: 283 },
  { name: "Rohit", score: 85 },
  { name: "Rahul", score: 65 },
  { name: "Shreyas", score: 70 },
  { name: "Hardik", score: 55 },
  { name: "Jadeja", score: 175 },
  { name: "Bumrah", score: 60 },
  { name: "Ashwin", score: 40 },
  { name: "Kuldeep", score: 58 },
  { name: "Surya", score: 90 },
  { name: "Dhoni", score: 100 }
];

const ListofPlayers = () => {
  const filtered = players.filter(player => player.score < 70);

  return (
     
    <div>
       
      <h2>All Players</h2>
      <ul>
        {players.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>

      <h3>Players with score below 70</h3>
      <ul>
        {filtered.map((p, index) => (
          <li key={index}>{p.name} - {p.score}</li>
        ))}
      </ul>
      
    </div>
    
  );
};

export default ListofPlayers;
