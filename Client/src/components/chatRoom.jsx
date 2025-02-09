import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { nanoid } from "nanoid";

const socket = io("http://localhost:4000");

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // ✅ Loader state
  const chatContainerRef = useRef(null); // Auto-scroll

  useEffect(() => {
    socket.on("chatMessage", (msg) => {
      setMessages((prevMessages) => [...prevMessages, msg]);
      setLoading(false); // ✅ Stop loader when bot responds

      // Auto-scroll to bottom
      setTimeout(() => {
        chatContainerRef.current?.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    });

    return () => {
      socket.off("chatMessage");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      const userMsg = { id: nanoid(), text: message, sender: "user" };

      setMessages((prev) => [...prev, userMsg]); // Add user message to UI
      socket.emit("chatMessage", userMsg); // Send to server
      setMessage(""); // Clear input field
      setLoading(true); // ✅ Show loader while AI is responding
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-900">
      <div className="w-full max-w-2xl bg-gray-800 rounded-lg shadow-xl overflow-hidden flex flex-col h-[85vh]">
        {/* Header */}
        <div className="bg-green-700 text-white p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Chat Room</h2>
          <button className="bg-red-500 px-4 py-1 rounded-lg text-white text-sm hover:bg-red-600 transition">
            Logout
          </button>
        </div>

        {/* Chat Messages */}
        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900 scrollbar-thin scrollbar-thumb-gray-700"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-lg max-w-xs text-sm ${
                  msg.sender === "user"
                    ? "bg-green-600 text-white"
                    : "bg-gray-700 text-gray-200"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}

          {/* Loader while AI is typing */}
          {loading && (
            <div className="flex justify-start">
              <div className="p-3 rounded-lg max-w-xs bg-gray-700 text-gray-200 animate-pulse">
                Thinking<span className="animate-bounce">...</span>
              </div>
            </div>
          )}
        </div>

        {/* Message Input */}
        <div className="bg-gray-800 p-4 border-t border-gray-700">
          <form className="flex items-center gap-2" onSubmit={sendMessage}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-700 text-white p-2 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
            />
            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              disabled={loading} // ✅ Prevent sending new messages while loading
            >
              <i className="fa-solid fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatRoom;
