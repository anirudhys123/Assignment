import React from 'react';
import './Sidebar.css';

function Sidebar({ onDragStart }) {
  return (
    <div className="sidebar">
      <h3>Components</h3>
      <div
        className="component"
        draggable
        onDragStart={(e) => onDragStart(e, 'input')}
      >
        <div className="component-header">Input</div>
        <span className="drag-handle">=</span> {/* Drag handle */}
      </div>
      <div
        className="component"
        draggable
        onDragStart={(e) => onDragStart(e, 'llm')}
      >
        <div className="component-header">LLM Engine</div>
        <span className="drag-handle">=</span> {/* Drag handle */}
      </div>
      <div
        className="component"
        draggable
        onDragStart={(e) => onDragStart(e, 'output')}
      >
        <div className="component-header">Output</div>
        <span className="drag-handle">=</span> {/* Drag handle */}
      </div>
    </div>
  );
}

export default Sidebar;
