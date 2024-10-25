import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <div>
      <p>Company not found..</p>
      <Link href="/companies" className="text-blue-500">
        To companies list.
      </Link>
    </div>
  );
}
