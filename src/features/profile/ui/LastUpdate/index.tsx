'use client';

import octokit from '@shared/api/octokit';
import Badge from '@shared/components/Badge';
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
        setCommitDate(isoDate ? dayjs(isoDate) : null);
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
    <div className='mt-14 flex flex-col items-center gap-2 text-sm text-gray-600'>
      <div className='flex flex-col items-end gap-1'>
        <span className='text-sm font-semibold text-gray-500'>마지막 업데이트</span>
        {formattedDate && (
          <Badge className='px-3 py-4 tracking-tight' size='md'>
            {formattedDate} (D {dayDiff! > 0 ? `+${dayDiff}` : '- Day'})
          </Badge>
        )}
      </div>
      <i className='text-xs text-gray-500'>Powered by GitHub API</i>
    </div>
  );
};

export default LastUpdate;
