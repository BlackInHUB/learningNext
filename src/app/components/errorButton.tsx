'use client';

import React, { useEffect, useState } from 'react';
import Button from './button';

export default function ErrorButton() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count > 2) {
      throw new Error('Unexpected error');
    }
  });

  return <Button onClick={() => setCount(count + 1)}>Error button</Button>;
}
