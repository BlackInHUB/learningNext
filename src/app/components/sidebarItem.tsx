import Image from 'next/image';
import React from 'react';

export interface SidebarItemProps {
  pathname: string;
  src: string;
  alt: string;
  children: React.ReactNode;
}

export default function SidebarItem({
  pathname,
  src,
  alt,
  children,
}: SidebarItemProps) {
  return (
    <li>
      <a href={pathname} className="flex gap-4 items-center">
        <Image height={18} width={18} src={src} alt={alt} />
        <span className="text-base text-zinc-50">{children}</span>
      </a>
    </li>
  );
}
