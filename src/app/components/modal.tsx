'use client';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import React, { Fragment } from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
}

export default function Modal({ children, show, onClose }: ModalProps) {
  return (
    <Transition as={Fragment} show={show}>
      <Dialog
        className="fixed inset-0 items-center z-50"
        as="div"
        onClose={onClose}
      >
        <TransitionChild
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>
        <DialogPanel className="relative transform overflow-hidden rounded bg-gray-100 shadow-xl transition-all p-8 mx-auto sm:my-10 sm:w-full sm:max-w-2xl">
          {children}
        </DialogPanel>
      </Dialog>
    </Transition>
  );
}
