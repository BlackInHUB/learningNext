import DbCard from '@/app/components/dbCard';
import DbTable from '@/app/components/dbTable';
import DbTableCell from '@/app/components/dbTableCell';
import DbTableHeader from '@/app/components/dbTableHeader';
import { getPromotions } from '@/lib/api';
import React from 'react';

export default async function Page() {
  const promotions = await getPromotions();

  return (
    <DbCard title="Promotions">
      <DbTable
        headers={
          <>
            <DbTableHeader align="left">Company</DbTableHeader>
            <DbTableHeader align="left">Name</DbTableHeader>
            <DbTableHeader>%</DbTableHeader>
          </>
        }
      >
        {promotions.map(
          ({ promotionId, companyName, promotionName, discount }) => (
            <tr key={promotionId}>
              <DbTableCell align="left">{companyName}</DbTableCell>
              <DbTableCell align="left">{promotionName}</DbTableCell>
              <DbTableCell>{`-${discount}`}</DbTableCell>
            </tr>
          ),
        )}
      </DbTable>
    </DbCard>
  );
}
