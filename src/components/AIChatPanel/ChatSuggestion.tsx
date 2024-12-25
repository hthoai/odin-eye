import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ChatSuggestionProps {
  icon: LucideIcon;
  text: string;
  onClick: () => void;
}

export default function ChatSuggestion({ icon: Icon, text, onClick }: ChatSuggestionProps) {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700 transition-colors"
    >
      <Icon className="h-4 w-4" />
      <span className="truncate">{text}</span>
    </button>
  );
}