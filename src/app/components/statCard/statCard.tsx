import React from 'react';
import styles from './statCard.module.css';
import clsx from 'clsx';

export interface StatCardProps {
  label: string;
  counter: number;
}

export default function StatCard({ label, counter }: StatCardProps) {
  return (
    <li className={clsx('p-7 rounded text-gray-900', [styles.gradient])}>
      <p className="text-sm pb-5 before:inline-block before:bg-gray-900 before:w-4 before:h-0.5 before:rounded before:mr-2 before:mb-1">
        {label}
      </p>
      <p className="text-6xl">{counter}</p>
    </li>
  );
}
