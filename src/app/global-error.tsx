'use client';

// import Button from '@/app/components/button';
import React from 'react';

export interface GlobalErrorProps {
  error: Error;
  //   reset: () => void;
}

export default function ErrorHandler({ error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <div>
          <p>{`Something globaly went wrong.. ${error.message}`}</p>
          {/* <Button onClick={() => reset()}>Try again</Button> */}
        </div>
      </body>
    </html>
  );
}
