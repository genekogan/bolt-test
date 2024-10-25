import React, { useState } from 'react';
import { Send, Settings } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

export function ChatPanel() {
  const [messages, setMessages] = useState([
    { message: "Hi! I'm your AI assistant. How can I help with your screenplay?", isBot: true, timestamp: "12:00 PM" }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = { message: input, isBot: false, timestamp: new Date().toLocaleTimeString() };
    setMessages(prev => [...prev, newMessage]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, {
        message: "I understand you're working on a screenplay. Could you tell me more about the scene you're visualizing?",
        isBot: true,
        timestamp: new Date().toLocaleTimeString()
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full bg-[var(--panel-bg)] rounded-lg overflow-hidden border border-[var(--border-color)]">
      <div className="p-4 border-b border-[var(--border-color)] flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white/90">AI Assistant</h2>
        <button className="p-1 text-white/60 hover:text-white">
          <Settings size={18} />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-custom">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} {...msg} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 border-t border-[var(--border-color)]">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 rounded bg-[var(--app-bg)] border border-[var(--border-color)] px-4 py-2 text-white placeholder-white/40 focus:outline-none focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
      </form>
    </div>
  );
}