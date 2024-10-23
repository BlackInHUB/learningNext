import React from 'react';
import Header from '../../components/header';
import ToolBar from '../../components/toolBar';
import CompaniesTable from '../../components/companiesTable';
import CompanyTableRow from '../../components/companiesTableRow';
import { Status } from '../../components/statusLabel';

export default function Page() {
  return (
    <main>
      <Header>Companies</Header>
      <ToolBar />
      <CompaniesTable>
        <CompanyTableRow
          category="Products"
          company="Costco"
          status={Status.Pending}
          promotion={true}
          country="USA"
          date="21.10.2024"
        />
      </CompaniesTable>
    </main>
  );
}
