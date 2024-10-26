import React from 'react';

export interface DbCardProps {
  title: string;
  children?: React.ReactNode;
}

export default function DbCard({ title, children }: DbCardProps) {
  return (
    <div className="bg-gray-100 rounded w-full h-full">
      <div className="p-5">
        <p className="text-xl font-medium">{title}</p>
      </div>
      {children}
    </div>
  );
}
