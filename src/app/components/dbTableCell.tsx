import React from 'react';

export interface DbTableCellProps {
  children: React.ReactNode;
  align?: 'center' | 'right' | 'left';
}

export default function DbTableCell({
  children,
  align = 'center',
}: DbTableCellProps) {
  return (
    <td
      className={`text-sm px-5 py-2 text-${align} border-gray-100 border-r first-of-type:border-l`}
    >
      {children}
    </td>
  );
}
