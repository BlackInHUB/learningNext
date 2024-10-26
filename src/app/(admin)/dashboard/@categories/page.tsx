import DbCard from '@/app/components/dbCard';
import DbCategories from '@/app/components/dbCategories';
import React from 'react';

export default function Page() {
  return (
    <DbCard title="Categories of companies">
      <DbCategories />
    </DbCard>
  );
}
