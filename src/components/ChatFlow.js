import React, { useState } from 'react';
import './ChatFlow.css'; // Add your styles here

function ChatFlow() {
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState('');

  // Start New Chat Button clears the chat window
  const handleStartNewChat = () => {
    setMessages([]);
    setUserMessage('');
  };

  // Handle the selected conversation from history
  const handleConversationClick = (conversation) => {
    const aiResponse = `AI Response for: ${conversation}`;
    
    setMessages([
      { type: 'user', text: conversation },
      { type: 'ai', text: aiResponse },
    ]);
  };

  // Handle user message send
  const handleSend = () => {
    if (userMessage.trim()) {
      setMessages([
        ...messages,
        { type: 'user', text: userMessage },
        { type: 'ai', text: 'AI Response for: ' + userMessage }, // Placeholder AI response
      ]);
      setUserMessage('');
    }
  };

  return (
    <div className="chat-flow-container">
      {/* Header Section */}
      <div className="chat-header">
        <div className="header-left">
          <i className="bi bi-braces"></i>
          <h1>OpenAGI</h1>
        </div>
      </div>

      {/* Start New Chat Button */}
      <button className="start-chat-btn" onClick={handleStartNewChat}>
        + Start New Chat
      </button>

      <div className="chat-content">
        <div className="chat-history">
          <h3>New Conversation</h3>
          <div className="chat-history-list">
            <p onClick={() => handleConversationClick('Create 10 poems for a scenario...')}>
              <i className="bi bi-file-earmark-plus"></i> Create 10 poems for a scenario...
            </p>
            <p onClick={() => handleConversationClick('Generate a poem on designs')}>
              <i className="bi bi-file-earmark-plus"></i> Generate a poem on designs...
            </p>
            <p onClick={() => handleConversationClick('Create 5 liner poem')}>
              <i className="bi bi-file-earmark-plus"></i> Create 5 liner poem...
            </p>
            <p onClick={() => handleConversationClick('Create a rich in metaphor poem')}>
              <i className="bi bi-file-earmark-plus"></i> Create a rich in metaphor poem...
            </p>
          </div>
        </div>

        <div className="chat-box">
          <div className="chat-box-header">
            <div className="ai-icon"><i className="bi bi-chat-dots"></i></div>
            <h3>Conversation</h3>
          </div>
          <div className="chat-bubbles">
            {messages.map((message, index) => (
              <div key={index} className={`chat-bubble ${message.type === 'ai' ? 'ai-message' : 'user-message'}`}>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="chat-input">
            <textarea
              placeholder="Write your message here..."
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
            />
            <button onClick={handleSend}><i className="bi bi-send"></i> Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatFlow;
