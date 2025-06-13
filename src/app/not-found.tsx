import Link from 'next/link';
import { FC } from 'react';

const NotFound: FC = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-10 text-center'>
      <h2 className='mb-2 text-3xl font-bold'>404 - Not Found</h2>
      <p className='mb-4 text-gray-500'>The page you are looking for does not exist.</p>
      <Link href='/' className='text-blue-500 hover:underline'>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;
