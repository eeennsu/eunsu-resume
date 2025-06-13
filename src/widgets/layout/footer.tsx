import type { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className='mt-10 w-full bg-neutral-200 py-5 text-center'>
      <div className='flex flex-col items-center justify-center gap-2 text-sm'>
        <p>Thanks for reading!</p>
        <p className='font-semibold'>v.2.1</p>
      </div>
    </footer>
  );
};
