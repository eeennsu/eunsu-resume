'use client';

import { useEffect, useState, type FC } from 'react';

import apiGetLatestTag from '@features/github/apis/getLatestTag';

const Footer: FC = () => {
  const [version, setVersion] = useState<string>('');

  useEffect(() => {
    const fetchLatestTag = async () => {
      try {
        const latestTag = await apiGetLatestTag();

        setVersion(latestTag ?? 'v.2.2.4');
      } catch (error) {
        console.error(error);
        setVersion('v.2.2.4');
      }
    };

    fetchLatestTag();
  }, []);

  return (
    <footer className='mt-10 w-full bg-neutral-200 py-5 text-center'>
      <div className='flex flex-col items-center justify-center gap-2 text-sm'>
        <p>Thanks for reading!</p>
        {version && <p className='font-semibold'>{version}</p>}
      </div>
    </footer>
  );
};

export default Footer;
