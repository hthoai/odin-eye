import React from 'react';
import { BookOpen, Video, Headphones, FileText } from 'lucide-react';
import { ContentType } from '../../types';

interface ContentBadgeProps {
  type: ContentType;
  duration?: string;
}

export default function ContentBadge({ type, duration }: ContentBadgeProps) {
  const getBadgeContent = () => {
    switch (type) {
      case 'video':
        return {
          Icon: Video,
          color: 'text-blue-600 bg-blue-50',
        };
      case 'audio':
        return {
          Icon: Headphones,
          color: 'text-green-600 bg-green-50',
        };
      case 'pdf':
        return {
          Icon: FileText,
          color: 'text-red-600 bg-red-50',
        };
      default:
        return {
          Icon: BookOpen,
          color: 'text-purple-600 bg-purple-50',
        };
    }
  };

  const { Icon, color } = getBadgeContent();

  return (
    <div className="flex items-center space-x-2">
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
        <Icon className="h-3.5 w-3.5 mr-1" />
        {type}
      </span>
      {duration && (
        <span className="text-xs text-gray-500">
          {duration}
        </span>
      )}
    </div>
  );
}