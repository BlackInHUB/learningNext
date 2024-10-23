import Image from 'next/image';
import React from 'react';

export interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearchClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function SearchInput({
  onSearchClick,
  ...rest
}: SearchInputProps) {
  return (
    <div className="relative w-96">
      <input
        {...rest}
        className="p-3 text-sm border border-gray-300 rounded w-full transition-all focus:border-gray-600"
        type="text"
        placeholder="Search..."
      />
      <button onClick={onSearchClick} className="absolute top-0 right-0 p-3">
        <Image width={21} height={21} src="/icons/search.svg" alt="search" />
      </button>
    </div>
  );
}
