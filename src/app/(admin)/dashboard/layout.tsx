import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
}

export default function Layout({ children, stats, sales }: LayoutProps) {
  return (
    <div>
      {children}
      <main className="p-10 grid grid-rows-4">
        <div>{stats}</div>
        <div>{sales}</div>
      </main>
    </div>
  );
}
