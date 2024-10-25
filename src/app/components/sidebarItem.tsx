import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
  current?: boolean;
}

export default function SidebarItem({
  pathname,
  src,
  alt,
  children,
  current,
}: SidebarItemProps) {
  return (
    <li>
      <Link
        href={pathname}
        className={clsx(
          'flex gap-4 items-center h-9',
          current &&
            'after:h-full after:border-2 after:border-purple-200 after:rounded-sm after:ml-auto',
        )}
      >
        <Image height={18} width={18} src={src} alt={alt} />
        <span className="text-base text-zinc-50">{children}</span>
      </Link>
    </li>
  );
}
