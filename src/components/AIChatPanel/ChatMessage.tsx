import React from 'react';
import { User, Bot } from 'lucide-react';

interface ChatMessageProps {
  content: string;
  role: 'user' | 'assistant';
}

export default function ChatMessage({ content, role }: ChatMessageProps) {
  return (
    <div
      className={`flex items-start space-x-3 ${
        role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
      }`}
    >
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
          role === 'user' ? 'bg-indigo-100' : 'bg-gray-100'
        }`}
      >
        {role === 'user' ? (
          <User className="h-5 w-5 text-indigo-600" />
        ) : (
          <Bot className="h-5 w-5 text-gray-600" />
        )}
      </div>
      <div
        className={`flex-1 rounded-2xl px-4 py-2 max-w-[80%] ${
          role === 'user'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}