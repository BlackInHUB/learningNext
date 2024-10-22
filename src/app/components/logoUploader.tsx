'use client';

import React from 'react';
import Image from 'next/image';

export interface LogoUploaderProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export default function LogoUploader({
  label,
  placeholder,
  id,
  ...rest
}: LogoUploaderProps) {
  return (
    <div className="text-base flex gap-5 mb-4">
      {label && <p className="text-base">{label}</p>}
      <label
        htmlFor={id}
        className="flex flex-col items-center justify-center cursor-pointer w-40 h-40 rounded-full bg-white border border-slate-900 border-dashed"
      >
        <Image width={48} height={48} src="/icons/upload.svg" alt="upload" />
        {placeholder && (
          <p className="text-base text-gray-500">{placeholder}</p>
        )}
        <input {...rest} className="hidden" type="file" accept="image/*" />
      </label>
    </div>
  );
}
