'use client';

import { Field } from 'formik';
import React from 'react';

export interface InputFieldProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function InputField({ label, id, ...rest }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="mb-2 text-base text-gray-900">
          {label}
        </label>
      )}
      <Field
        {...rest}
        id={id}
        className="p-3 text-sm rounded border border-gray-300 text-gray-500 shadow"
      />
    </div>
  );
}
