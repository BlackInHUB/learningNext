'use client';

import { Form, Formik } from 'formik';
import React from 'react';
import LogoUploader from './logoUploader';
import InputField from './inputField';
import Button from './button';

export type CompanyFormValues = {
  name: string;
  category: string;
  country: string;
  status: string;
  date: string;
  description: string;
};

const initialValues: CompanyFormValues = {
  name: '',
  category: '',
  country: '',
  status: '',
  date: '',
  description: '',
};

export interface CompanyFormProps {
  onSubmit: (values: CompanyFormValues) => void | Promise<void>;
}

export default function CompanyForm({ onSubmit }: CompanyFormProps) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form className="flex flex-col gap-10">
        <p className="text-xl">Add new company</p>
        <div className="flex gap-7">
          <div className="flex flex-col flex-1 gap-5 pt-0.5">
            <LogoUploader label="Logo" placeholder="Upload photo" />
            <InputField label="Status" name="status" placeholder="Status" />
            <InputField label="Country" name="country" placeholder="Country" />
          </div>
          <div className="flex flex-col flex-1 gap-5">
            <InputField label="Name" name="name" placeholder="Name" />
            <InputField
              label="Category"
              name="category"
              placeholder="Category"
            />
            <InputField label="Joined data" name="date" type="date" />
            <InputField
              label="Description"
              name="description"
              placeholder="Description"
            />
          </div>
        </div>
        <Button type="submit">Add company</Button>
      </Form>
    </Formik>
  );
}
