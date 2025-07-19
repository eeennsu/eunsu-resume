'use client';

import { FC, useEffect } from 'react';

interface Props {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorPage: FC<Props> = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
};

export default ErrorPage;
