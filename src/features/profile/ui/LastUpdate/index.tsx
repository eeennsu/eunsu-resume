'use client';

import octokit from '@shared/api/octokit';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState, type FC } from 'react';

const LastUpdate: FC = () => {
  const [commitDate, setCommitDate] = useState<Dayjs | null>(null);

  useEffect(() => {
    const fetchBranchData = async () => {
      try {
        const branchResponse = await octokit.request(
          'GET /repos/{owner}/{repo}/branches/{branch}',
          {
            owner: 'eeennsu',
            repo: 'eunsu-resume',
            branch: process.env.NODE_ENV === 'production' ? 'main' : 'dev',
          },
        );

        const isoDate = branchResponse.data.commit?.commit?.author?.date;
        setCommitDate(isoDate ? dayjs(isoDate) : dayjs().subtract(16, 'days'));
      } catch (error) {
        console.log(error);
        setCommitDate(dayjs().subtract(13, 'days'));
      }
    };

    fetchBranchData();
  }, []);

  const formattedDate = commitDate ? commitDate.format('YYYY-MM-DD') : null;
  const dayDiff = commitDate ? dayjs().startOf('day').diff(commitDate.startOf('day'), 'day') : null;

  return (
    <div className='flex flex-col items-end text-sm md:mt-14 md:items-center'>
      <p className='w-full text-right text-sm font-semibold'>마지막 업데이트</p>
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
