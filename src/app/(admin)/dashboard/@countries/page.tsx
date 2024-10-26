import DbCard from '@/app/components/dbCard';
import { getCountries } from '@/lib/api';
import Image from 'next/image';
import React from 'react';

export default async function Page() {
  const countries = await getCountries();

  return (
    <DbCard title="Countries of companies">
      <div className="flex gap-5 items-end p-5 pt-0">
        <ul className="flex flex-col gap-2">
          {countries.map(({ countryId, country, count }) => (
            <li key={countryId} className="text-sm font-medium text-gray-900">
              <p className="before:inline-block before:w-2 before:h-2 before:rounded-full before:bg-purple-200 before:mr-2 before:mb-0.5">
                {`${country} - ${count}`}
              </p>
            </li>
          ))}
        </ul>
        <Image src="/images/world.svg" alt="world" width={395} height={260} />
      </div>
    </DbCard>
  );
}
