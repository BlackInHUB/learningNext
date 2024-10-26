import { getCategories } from '@/lib/api';
import React from 'react';
import StatCard from './statCard';

export default async function DbCategories() {
  const categories = await getCategories();

  return (
    <ul className="grid grid-cols-4 grid-rows-2 gap-3 px-5 pb-5">
      {categories.map(({ categoryId, category, count }) => (
        <StatCard
          key={categoryId}
          label={category}
          counter={count}
          type="dark"
        />
      ))}
    </ul>
  );
}
