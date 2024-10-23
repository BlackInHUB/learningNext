import Image from 'next/image';
import React from 'react';
import SidebarItem from './sidebarItem';

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 bg-gray-900 w-60 h-screen p-6 pt-8">
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
            pathname="/dashboard"
            src="/icons/dashboard.svg"
            alt="dashboard"
          >
            Dashboard
          </SidebarItem>
          <SidebarItem
            pathname="/companies"
            src="/icons/companies.svg"
            alt="companies"
          >
            Companies
          </SidebarItem>
        </ul>
        <button className="bg-transparent flex gap-2 mx-auto mt-auto p-3 items-center justify-center text-zinc-50">
          <Image width={18} height={18} src="/icons/exit.svg" alt="exit" />
          <span>Exit</span>
        </button>
      </div>
    </aside>
  );
}
