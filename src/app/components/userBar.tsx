import React from 'react';
import Image from 'next/image';

export default function UserBar() {
  return (
    <div className="flex gap-3 pl-5 border-l border-l-gray-300">
      <div className="rounded-full w-11 h-11 overflow-hidden flex items-center justify-center">
        <Image src="/images/avatar.png" alt="avatar" width={44} height={44} />
      </div>
      <div className="flex flex-col">
        <p className="text-base text-gray-900">Adam Smith</p>
        <p className="text-sm text-gray-900">adamsmith@gmail.com</p>
      </div>
    </div>
  );
}
