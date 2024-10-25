'use client';

import Header from '@/app/components/header';
import ToolBar from '@/app/components/toolBar';
import { notFound } from 'next/navigation';
import React, { useEffect } from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  }, [params.id]);

  return (
    <main>
      <Header>{`Company - ${params.id}`}</Header>
      <ToolBar />
    </main>
  );
}
