// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WorkflowUI from './components/WorkflowUI'; // Your main page
import ChatFlow from './components/ChatFlow'; // The ChatFlow component
import 'bootstrap-icons/font/bootstrap-icons.css';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkflowUI />} />
        <Route path="/chatflow" element={<ChatFlow />} />
      </Routes>
    </Router>
  );
}

export default App;
