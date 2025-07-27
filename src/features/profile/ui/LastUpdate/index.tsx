'use client';

import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState, type FC } from 'react';

import apiGetBranchCommitDate from '@features/github/apis/getBranchCommitDate';

const LastUpdate: FC = () => {
  const [commitDate, setCommitDate] = useState<Dayjs | null>(null);

  const setDefaultCommitDate = (date: string | Dayjs) => {
    setCommitDate(dayjs(date).subtract(14, 'days'));
  };

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        const isoDate = await apiGetBranchCommitDate();

        if (!isoDate) {
          setDefaultCommitDate(dayjs());
          return;
        }

        setCommitDate(dayjs(isoDate));
      } catch (error) {
        console.log(error);
        setDefaultCommitDate(dayjs());
      }
    };

    fetchBranchData();
  }, []);

  const formattedDate = commitDate ? commitDate.format('YYYY-MM-DD') : null;
  const dayDiff = commitDate ? dayjs().startOf('day').diff(commitDate.startOf('day'), 'day') : null;

  return (
    <div className='mt-8 flex h-fit flex-col items-end rounded-md px-4 py-2 text-sm md:mt-14'>
      <div className='flex w-full flex-row items-center md:flex-col'>
        {formattedDate && (
          <span className='font-semibold tracking-tight'>
            {formattedDate} (D {dayDiff! > 0 ? `+ ${dayDiff}` : '- Day'})
          </span>
        )}
        <p className='text-xs text-gray-800 md:text-right'>마지막 업데이트</p>
      </div>
    </div>
  );
};

export default LastUpdate;
