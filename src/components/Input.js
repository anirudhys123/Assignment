import React from 'react';
import './Input.css';

function Input() {
  return (
    <div className="input-card">
      <div className="input-header">
        <h3>INPUT</h3>
      </div>
      <div className="input-description">
        <p>Write the input/question you want to ask</p>
      </div>
      <div className="input-field">
        <input type="text" placeholder="Type Something..." />
      </div>
    </div>
  );
}

export default Input;
