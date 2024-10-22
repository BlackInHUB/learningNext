'use client';

import React from 'react';
import Modal, { ModalProps } from './modal';
import CompanyForm, { CompanyFormProps } from './companyForm';

export interface CompanyModalProps extends ModalProps {
  onSubmit: CompanyFormProps['onSubmit'];
}

export default function CompanyModal({ onSubmit, ...rest }: CompanyModalProps) {
  return (
    <Modal {...rest}>
      <CompanyForm onSubmit={onSubmit} />
    </Modal>
  );
}
