import React from 'react';
import StatusLabel, { Status } from './statusLabel';
import Image from 'next/image';
import clsx from 'clsx';

export interface CompanyTableRowProps {
  category: string;
  company: string;
  status: Status;
  promotion: boolean;
  country: string;
  date: string;
}

const labelByStatus = {
  [Status.Active]: 'Active',
  [Status.NotActive]: 'Not active',
  [Status.Pending]: 'Pending',
  [Status.Suspended]: 'Suspended',
};

export default function CompanyTableRow({
  category,
  company,
  status,
  promotion,
  country,
  date,
}: CompanyTableRowProps) {
  return (
    <tr className="text-center h-14 bg-white">
      <td className="text-xs rounded-l border-l-4 border-orange-400">
        {category}
      </td>
      <td>{company}</td>
      <td>
        <StatusLabel status={status}>{labelByStatus[status]}</StatusLabel>
      </td>
      <td>
        <div className="inline-flex gap-1 items-center justify-center">
          <Image
            width={16}
            height={16}
            src={`/icons/${promotion ? 'yes' : 'no'}.svg`}
            alt="promotion"
          />
          <span
            className={clsx(
              'text-sm font-medium',
              promotion ? 'text-green-700' : 'text-red-700',
            )}
          >{`${promotion ? 'Yes' : 'No'}`}</span>
        </div>
      </td>
      <td>{country}</td>
      <td>{date}</td>
    </tr>
  );
}
