import Header from '@/app/components/header';
import ToolBar from '@/app/components/toolBar';
import React from 'react';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  return (
    <main>
      <Header>{`Company - ${params.id}`}</Header>
      <ToolBar />
    </main>
  );
}
