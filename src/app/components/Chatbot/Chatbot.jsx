"use client";

import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (input.trim() === "") return;

    // Add user's message
    const userMessage = {
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages([...messages, userMessage]);
    setInput("");

    // Add bot response after a short delay
    setTimeout(() => {
      const botMessage = {
        text: "Thank you for your message! We’ll get back to you soon.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1000);
  };

  return (
    <div className="relative z-50">
      {/* Button to open/close the chat overlay */}
      <button
        onClick={toggleChat}
        className="fixed bottom-5 right-5 btn btn-primary rounded-full"
      >
        {isOpen ? "Close" : "AI Assistant"}
      </button>

      {/* Chat overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white w-full max-w-xl rounded-lg shadow-lg p-4 relative">
            {/* Chat header */}
            <div className="flex justify-between items-center border-b pb-2 mb-2">
              <h2 className="text-lg font-semibold">
                Basha Lagbe AI Assistant
              </h2>
              <button onClick={toggleChat} className="btn btn-circle btn-sm">
                ✕
              </button>
            </div>

            {/* Chat messages */}
            <div className="overflow-y-auto max-h-80 mb-4 space-y-2">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`chat ${
                    msg.sender === "user" ? "chat-end" : "chat-start"
                  }`}
                >
                  <div
                    className={`chat-bubble ${
                      msg.sender === "user"
                        ? "chat-bubble-secondary"
                        : "chat-bubble-primary"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Message input */}
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="input input-bordered w-full"
                placeholder="Type a message..."
              />
              <button onClick={handleSendMessage} className="btn btn-primary">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
