import React, { useState } from 'react';
import '../App.css';

function ChatBox() {
  const [isChatOpen, setChatOpen] = useState(false);

  const toggleChat = () => {
    setChatOpen(!isChatOpen);
  };

  return (
    <div className="chat-container">
      {isChatOpen ? (
        <div className="chatbox">
          <h4>Chat with us!</h4>
          <textarea placeholder="Type your message..."></textarea>
          <button onClick={toggleChat}>Close</button>
        </div>
      ) : (
        <button className="chat-button" onClick={toggleChat}>Chat</button>
      )}
    </div>
  );
}

export default ChatBox;
