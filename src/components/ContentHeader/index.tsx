import React from 'react';
import { ArrowLeft } from 'lucide-react';
import ContentTitle from './ContentTitle';
import ContentBadge from './ContentBadge';
import ContentActions from '../ContentActions';
import { ContentItem } from '../../types';

interface ContentHeaderProps {
  content: ContentItem;
  onBack: () => void;
}

export default function ContentHeader({ content, onBack }: ContentHeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <div className="flex items-start space-x-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
              aria-label="Go back"
            >
              <ArrowLeft className="h-5 w-5 text-gray-500" />
            </button>
            <div className="space-y-1 min-w-0">
              <ContentTitle title={content.title} />
              <ContentBadge type={content.type} duration={content.duration} />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ContentActions content={content} />
          </div>
        </div>
      </div>
    </header>
  );
}