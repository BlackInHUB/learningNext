import React from 'react';
import styles from './statCard.module.css';
import clsx from 'clsx';

export interface StatCardProps {
  label: string;
  counter: number;
  type: 'dark' | 'gradient';
}

export default function StatCard({ label, counter, type }: StatCardProps) {
  return (
    <li
      className={clsx(
        'rounded',
        type === 'gradient'
          ? [styles.gradient, 'p-7']
          : 'bg-gray-900 p-3 pb-0 even:text-lime-200 odd:text-purple-200',
      )}
    >
      <p
        className={clsx(
          'before:w-4 before:h-0.5 before:rounded',
          type === 'gradient'
            ? 'text-xs text-gray-900 mb-5 before:inline-block before:bg-gray-900 before:mr-2 before:mb-1'
            : 'mb-1.5 before:block before:bg-zinc-50 before:mb-2 text-sm text-zinc-50',
        )}
      >
        {label}
      </p>
      <p
        className={clsx(
          'text-6xl font-semibold',
          type === 'gradient' ? 'ml-6' : 'text-right',
        )}
      >
        {counter}
      </p>
    </li>
  );
}
