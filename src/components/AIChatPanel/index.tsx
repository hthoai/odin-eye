import {
  Book,
  Brain,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { ContentItem } from "../../types";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatSuggestion from "./ChatSuggestion";

interface AIChatPanelProps {
  content: ContentItem;
  isOpen: boolean;
  onToggle: () => void;
}

export default function AIChatPanel({
  content,
  isOpen,
  onToggle,
}: AIChatPanelProps) {
  const [messages, setMessages] = useState<
    Array<{
      id: string;
      role: "user" | "assistant";
      content: string;
    }>
  >([]);

  const suggestions = [
    { icon: Brain, text: "Explain this in simple terms" },
    { icon: Book, text: "Generate study notes" },
    { icon: HelpCircle, text: "Quiz me on this content" },
  ];

  const handleSend = (message: string) => {
    setMessages([
      ...messages,
      { id: Date.now().toString(), role: "user", content: message },
    ]);

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content:
            "This is a simulated AI response. In a real implementation, this would be connected to an AI service.",
        },
      ]);
    }, 1000);
  };

  return (
    <div className="fixed top-[4.5rem] right-0 h-[calc(100vh-4.5rem)] flex z-20">
      <button
        onClick={onToggle}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white rounded-full p-1.5 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label={isOpen ? "Collapse chat" : "Expand chat"}
      >
        {isOpen ? (
          <ChevronRight className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronLeft className="h-5 w-5 text-gray-500" />
        )}
      </button>

      <div
        className={`bg-white rounded-l-lg shadow-lg flex flex-col transition-all duration-300 ${
          isOpen ? "w-[400px]" : "w-0"
        } overflow-hidden`}
      >
        <div className="p-4 border-b bg-white">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center">
            <Sparkles className="h-5 w-5 text-indigo-500 mr-2" />
            Learning Assistant
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              content={message.content}
              role={message.role}
            />
          ))}
          {messages.length === 0 && (
            <div className="text-center text-gray-500 py-8">
              <p className="text-sm">
                Start a conversation with your AI learning assistant
              </p>
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-100 bg-white">
          <div className="flex flex-wrap gap-2 mb-4">
            {suggestions.map((suggestion, index) => (
              <ChatSuggestion
                key={index}
                icon={suggestion.icon}
                text={suggestion.text}
                onClick={() => handleSend(suggestion.text)}
              />
            ))}
          </div>

          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
