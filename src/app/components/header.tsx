import React from 'react';
import UserBar from './userBar';

export interface HeaderProps {
  children?: React.ReactNode;
}

export default function Header({}: HeaderProps) {
  return (
    <header className="flex items-center justify-between px-10 py-7 border-b border-b-gray-300">
      <h1 className="text-3xl font-bold text-gray-900">Companies</h1>
      <UserBar />
    </header>
  );
}
