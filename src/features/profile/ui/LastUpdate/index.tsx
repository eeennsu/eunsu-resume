'use client';

import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState, type FC } from 'react';

import apiGetBranchCommitDate from '@features/github/apis/getBranchCommitDate';

const LastUpdate: FC = () => {
  const [commitDate, setCommitDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        const isoDate = await apiGetBranchCommitDate();

        setCommitDate(isoDate ? dayjs(isoDate) : dayjs().subtract(14, 'days'));
      } catch (error) {
        console.log(error);
        setCommitDate(dayjs().subtract(14, 'days'));
      }
    };

    fetchBranchData();
  }, []);

  const formattedDate = commitDate ? commitDate.format('YYYY-MM-DD') : null;
  const dayDiff = commitDate ? dayjs().startOf('day').diff(commitDate.startOf('day'), 'day') : null;

  return (
    <div className='mt-8 flex flex-col items-center text-sm md:mt-14'>
      <p className='w-full text-sm font-semibold md:text-right'>마지막 업데이트</p>
      {formattedDate && (
        <span className='font-semibold tracking-tight'>
          {formattedDate} (D {dayDiff! > 0 ? `+${dayDiff}` : '- Day'})
        </span>
      )}

      <i className='mt-1 text-xs text-gray-500'>Powered by GitHub API</i>
    </div>
  );
};

export default LastUpdate;
