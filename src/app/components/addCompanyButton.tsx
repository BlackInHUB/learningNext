'use client';

import React, { useState } from 'react';
import Button from './button';
import dynamic from 'next/dynamic';

const CompanyModal = dynamic(() => import('./companyModal'), {
  ssr: false,
});

export default function AddCompanyButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <Button onClick={() => setShow(true)}>Add company</Button>
      <CompanyModal
        onSubmit={console.log}
        onClose={() => setShow(false)}
        show={show}
      />
    </>
  );
}
