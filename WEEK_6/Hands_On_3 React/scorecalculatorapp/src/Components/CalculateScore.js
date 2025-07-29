import React, { useState } from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore() {
  const [name, setName] = useState('');
  const [school, setSchool] = useState('');
  const [total, setTotal] = useState('');
  const [goal, setGoal] = useState('');
  const [average, setAverage] = useState(null);

  const handleClick = () => {
    const avg = ((parseFloat(total) / parseFloat(goal)) * 100).toFixed(2);
    setAverage(avg);
  };

  return (
    <div className="container">
      <h2>Student Score Calculator</h2>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      /><br />

      <input
        type="text"
        placeholder="Enter School"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Enter Total Score"
        value={total}
        onChange={(e) => setTotal(e.target.value)}
      /><br />

      <input
        type="number"
        placeholder="Enter Goal Score"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
      /><br />

      <button onClick={handleClick}>Calculate</button>

      {average && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Average Score: {average}%
        </p>
      )}
    </div>
  );
}

export default CalculateScore;
