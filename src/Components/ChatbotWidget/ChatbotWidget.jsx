import React, { useState } from "react";
import "./ChatbotWidget.css";
import robotIcon from "../../assets/robot-icon.png";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userMessage, setUserMessage] = useState("");

  const API_URL = "https://payload.vextapp.com/hook/07YPNARBHV/catch/z5gNS0MB.zC4LTiNkrRU5s7ej7TaudJo2iAnFXxu1";

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const newMessages = [...messages, { text: userMessage, sender: "user" }];
    setMessages(newMessages);
    setUserMessage("");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Apikey": "Api-Key z5gNS0MB.zC4LTiNkrRU5s7ej7TaudJo2iAnFXxu1",
        },
        body: JSON.stringify({ payload: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      if (data?.text) {
        setMessages((prev) => [...prev, { text: data.text, sender: "bot" }]);
      } else {
        console.error("Unexpected response structure:", data);
        setMessages((prev) => [
          ...prev,
          { text: "Sorry, something went wrong. Please try again.", sender: "bot" },
        ]);
      }
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessages((prev) => [
        ...prev,
        { text: "Error: Unable to reach the server. Please try again later.", sender: "bot" },
      ]);
    }
  };

  return (
    <div className="chatbot-widget">
      <div className="chatbot-icon" onClick={toggleChat}>
        <img src={robotIcon} alt="Chatbot" />
      </div>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>Ask Me Anything</h4>
            <button onClick={toggleChat}>&times;</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`chatbot-message ${message.sender}`}
              >
                {message.text}
              </div>
            ))}
          </div>
          <div className="chatbot-input">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Type your question..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatbotWidget;
