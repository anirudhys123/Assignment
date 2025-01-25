import React from 'react';
import './Output.css';

function Output() {
  return (
    <div className="output-card">
      <div className="output-header">
        <h3>OUTPUT</h3>
      </div>
      <div className="output-description">
        <p>Generated output will be displayed here</p>
      </div>
      <div className="output-field">
        <textarea placeholder="Output response will be shown here" rows="6"></textarea>
      </div>
    </div>
  );
}

export default Output;
