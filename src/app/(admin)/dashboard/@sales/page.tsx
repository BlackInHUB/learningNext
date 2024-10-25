import DbTable from '@/app/components/dbTable';
import DbTableCell from '@/app/components/dbTableCell';
import DbTableHeader from '@/app/components/dbTableHeader';

import { getSales } from '@/lib/api';
import React from 'react';

export default async function Page() {
  const sales = await getSales();

  return (
    <DbTable
      headers={
        <>
          <DbTableHeader align="left">Company</DbTableHeader>
          <DbTableHeader>Sold</DbTableHeader>
          <DbTableHeader>Income</DbTableHeader>
        </>
      }
    >
      {sales.map(({ companyId, name, sold, income }) => (
        <tr key={companyId}>
          <DbTableCell align="left">{name}</DbTableCell>
          <DbTableCell>{sold}</DbTableCell>
          <DbTableCell>{`$${income}`}</DbTableCell>
        </tr>
      ))}
    </DbTable>
  );
}
