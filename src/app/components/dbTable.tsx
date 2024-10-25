import React from 'react';

export interface DbTableProps {
  children?: React.ReactNode;
  headers: React.ReactNode;
}

export default function DbTable({ children, headers }: DbTableProps) {
  return (
    <table className="table-auto w-full border-separate border-spacing-0">
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-childe(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">
        {children}
      </tbody>
    </table>
  );
}
