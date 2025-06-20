import { Github } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  isHeaderVisible: boolean;
}

const Header: FC<Props> = ({ isHeaderVisible }) => {
  return (
    <header
      className={twMerge(
        'fixed top-0 left-0 z-50 w-full bg-white/30 shadow-md backdrop-blur-lg transition-opacity duration-300 ease-out',
        isHeaderVisible ? 'opacity-100' : 'opacity-0',
      )}
    >
      <div className='mx-auto flex max-w-6xl items-center justify-between px-6 py-4'>
        <div className='flex items-end gap-2'>
          <h1 className='text-2xl tracking-wide text-gray-800'>방은수</h1>
          <span className='text-sm text-gray-700'>1999.01.21</span>
        </div>

        <Link
          href='https://github.com/eeennsu'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-800 transition-colors hover:text-blue-600'
        >
          <Github size={28} />
        </Link>
      </div>
    </header>
  );
};

export default Header;
