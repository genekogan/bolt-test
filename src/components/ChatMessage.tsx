import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
  timestamp: string;
}

export function ChatMessage({ message, isBot, timestamp }: ChatMessageProps) {
  return (
    <div className={`flex gap-3 ${isBot ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${isBot ? 'bg-blue-600/20' : 'bg-purple-600/20'}`}>
        {isBot ? <Bot size={20} className="text-blue-400" /> : <User size={20} className="text-purple-400" />}
      </div>
      <div className={`flex-1 ${isBot ? 'pr-12' : 'pl-12'}`}>
        <div className={`rounded-lg p-3 ${isBot ? 'bg-[var(--app-bg)]' : 'bg-blue-600/20'} border border-[var(--border-color)]`}>
          <p className="text-white/90">{message}</p>
        </div>
        <span className="text-xs text-white/40 mt-1 block">{timestamp}</span>
      </div>
    </div>
  );
}