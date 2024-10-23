import React from 'react';
import SearchInput from './searchInput';
import AddCompanyButton from './addCompanyButton';

export default function ToolBar() {
  return (
    <div className="w-full px-10 py-8 flex justify-between">
      <SearchInput />
      <AddCompanyButton />
    </div>
  );
}
