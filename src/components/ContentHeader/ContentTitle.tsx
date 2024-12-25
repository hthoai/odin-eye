import React from 'react';

interface ContentTitleProps {
  title: string;
}

export default function ContentTitle({ title }: ContentTitleProps) {
  return (
    <h1 className="text-xl font-semibold text-gray-900 line-clamp-1 sm:text-2xl">
      {title}
    </h1>
  );
}