import React, { useState } from "react";
import Guest from "./Guest";
import User from "./User";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  let displayComponent = isLoggedIn ? <User /> : <Guest />;

  return (
    <div className="app-container">
      <h1>Ticket Booking App</h1>

      {isLoggedIn ? (
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      ) : (
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      )}

      <hr />
      <div className="component-box">{displayComponent}</div>
    </div>
  );
}

export default App;
