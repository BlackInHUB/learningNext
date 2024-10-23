import React from 'react';

export interface CompaniesTableProps {
  children?: React.ReactNode;
}

const headers = [
  'Category',
  'Company',
  'Status',
  'Promotion',
  'Country',
  'Joined date',
];

export default function CompaniesTable({ children }: CompaniesTableProps) {
  return (
    <div className="px-10 py-8 bg-gray-100">
      <table className="table-auto w-full border-separate border-spacing-y-2">
        <thead>
          <tr>
            {headers.map((header, i) => (
              <th className="pb-5 text-center text-gray-900 font-light" key={i}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
