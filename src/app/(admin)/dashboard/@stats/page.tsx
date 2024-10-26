import StatCard from '@/app/components/statCard';
import { getStats } from '@/lib/api';

const labelByStat = {
  promotions: 'Total promotions',
  category: 'Total categories',
  newCompanies: 'New companies',
  activeCompanies: 'Total active companies',
};

export default async function Page() {
  const data = await getStats();

  return (
    <ul className="grid grid-cols-4 gap-5">
      {(Object.keys(labelByStat) as (keyof typeof data)[]).map((key) => (
        <StatCard
          type="gradient"
          key={key}
          label={labelByStat[key]}
          counter={data[key]}
        />
      ))}
    </ul>
  );
}
