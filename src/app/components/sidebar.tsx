'use client';

import Image from 'next/image';
import React from 'react';
import SidebarItem from './sidebarItem';
import { usePathname, useRouter } from 'next/navigation';

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const handleExitClick = () => {
    router.push('/');
  };

  return (
    <aside className="fixed top-0 left-0 bg-gray-900 w-60 h-screen p-6 pt-8 pr-1">
      <div className="h-full flex flex-col overflow-y-auto">
        <Image
          width={122}
          height={24}
          src="/icons/logo.svg"
          alt="logo"
          className="mb-20"
        />
        <ul className="space-y-7">
          <SidebarItem
            current={pathname === '/dashboard'}
            pathname="/dashboard"
            src="/icons/dashboard.svg"
            alt="dashboard"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            current={pathname === '/companies'}
            pathname="/companies"
            src="/icons/companies.svg"
            alt="companies"
          >
            Companies
          </SidebarItem>
        </ul>
        <button
          className="bg-transparent flex gap-2 mx-auto mt-auto p-3 items-center justify-center text-zinc-50"
          onClick={handleExitClick}
        >
          <Image width={18} height={18} src="/icons/exit.svg" alt="exit" />
          <span>Exit</span>
        </button>
      </div>
    </aside>
  );
}
