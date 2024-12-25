import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import ContentViewer from '../components/ContentViewer';
import AIChatPanel from '../components/AIChatPanel';
import ContentSummary from '../components/ContentSummary';
import NotesSection from '../components/NotesSection';
import ProgressTracker from '../components/ProgressTracker';
import ContentHeader from '../components/ContentHeader';

interface ContentDetailsProps {
  contentId: string;
  onBack: () => void;
}

export default function ContentDetails({ contentId, onBack }: ContentDetailsProps) {
  const content = useStore((state) => 
    state.contents.find((c) => c.id === contentId)
  );
  const [isChatOpen, setIsChatOpen] = useState(true);

  if (!content) return null;

  return (
    <div className="min-h-screen bg-gray-50">
      <ContentHeader content={content} onBack={onBack} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex gap-6">
          <div className={`flex-1 space-y-6 transition-all duration-300 ${
            isChatOpen ? 'mr-[400px]' : 'mr-0'
          }`}>
            <ContentViewer content={content} />
            <ProgressTracker progress={75} />
            <ContentSummary content={content} />
            <NotesSection contentId={content.id} />
          </div>

          <AIChatPanel 
            content={content} 
            isOpen={isChatOpen} 
            onToggle={() => setIsChatOpen(!isChatOpen)} 
          />
        </div>
      </div>
    </div>
  );
}