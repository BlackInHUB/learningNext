import React from 'react';

export interface LayoutProps {
  children: React.ReactNode;
  stats: React.ReactNode;
  sales: React.ReactNode;
  categories: React.ReactNode;
}

export default function Layout({
  children,
  stats,
  sales,
  categories,
}: LayoutProps) {
  return (
    <div>
      {children}
      <main className="p-10 grid grid-cols-12 gap-5">
        <div className="col-span-12">{stats}</div>
        <div className="col-span-5">{sales}</div>
        <div className="col-span-7">{categories}</div>
      </main>
    </div>
  );
}
