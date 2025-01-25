import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-title">OpenAGI</div>
      <div className="navbar-buttons">
        <button className="deploy-btn">Deploy</button>
        <button className="run-btn">Run</button>
      </div>
    </div>
  );
}

export default Navbar;
