import React from 'react';
import './LLMEngine.css';

function LLMEngine() {
  return (
    <div className="llm-card">
      <div className="llm-header">
        <h3>LLM ENGINE</h3>
      </div>
      <div className="llm-description">
        <p>Configure the LLM model and parameters</p>
      </div>
      <div className="llm-fields">
        {/* Dropdown for Model Name */}
        <select placeholder="Model Name">
          <option value="gpt-3.5">gpt-3.5</option>
          <option value="gpt-4">gpt-4</option>
        </select>
        <input type="text" placeholder="OpenAI API Base" />
        <input type="text" placeholder="OpenAI Key" />
        <input type="number" placeholder="Max Tokens" />
        <input type="number" placeholder="Temperature" />
      </div>
    </div>
  );
}

export default LLMEngine;
