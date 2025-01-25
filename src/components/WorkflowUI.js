// WorkflowUI.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'; 
import Sidebar from './Sidebar'; 
import Input from './Input'; 
import LLMEngine from './LLMEngine'; 
import Output from './Output'; 
import './WorkflowUI.css';

function WorkflowUI() {
  const navigate = useNavigate();

  const handleChatClick = () => {
    // Navigate to ChatFlow page when the icon is clicked
    navigate('/chatflow');
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="workflow-container">
        <Sidebar />
        <div className="cards-container">
          <Input />
          <LLMEngine />
          <Output />
        </div>
      </div>

      {/* Chat bubble icon */}
      <div className="chat-icon" onClick={handleChatClick}>
        <span>💬</span>
      </div>
    </div>
  );
}

export default WorkflowUI;
