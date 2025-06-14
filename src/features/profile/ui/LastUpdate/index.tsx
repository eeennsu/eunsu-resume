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
    <div className='flex h-5 w-full items-center gap-3 text-xs max-md:justify-end'>
      Last Update
      {formattedDate && (
        <Badge className='tracking-wide'>
          {formattedDate} (D {dayDiff! > 0 ? `+ ${dayDiff}` : 'Day'})
        </Badge>
      )}
      <span className='text-xs font-medium text-gray-400'>Using by GitHub API</span>
    </div>
  );
};

export default LastUpdate;
