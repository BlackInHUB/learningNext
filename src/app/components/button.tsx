'use client';

import clsx from 'clsx';
import React from 'react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  disabled?: boolean;
}

export default function Button({ disabled, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        'py-2.5 px-5 rounded bg-gray-900 text-base text-center text-zinc-50',
        !disabled && 'hover:bg-gray-700 active:bg-gray-950',
        disabled && 'text-zinc-100',
      )}
    />
  );
}
