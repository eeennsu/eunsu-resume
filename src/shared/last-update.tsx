'use client';

import { ResponseGitHubBranch } from '@entities/github';
import { fetchHandler } from '@lib/api/next-api';
import { Badge } from '@shared/common';
import dayjs, { Dayjs } from 'dayjs';
import { useEffect, useState, type FC } from 'react';

export const LastUpdate: FC = () => {
  const [writeDay, setWriteDay] = useState<Dayjs>();
  const [dayDiff, setDayDiff] = useState<number>(0);

  useEffect(() => {
    async function fetchBranchData() {
      const branchResp = await fetchHandler<ResponseGitHubBranch>('/github/branch', {
        next: { revalidate: 60 * 60 },
      });
      const now = dayjs().startOf('day');
      const commitDate = branchResp.commit.commit.author.date
        ? dayjs(branchResp.commit.commit.author.date).startOf('day')
        : now.subtract(8, 'day');

      setWriteDay(commitDate);
      setDayDiff(now.diff(commitDate, 'day'));
    }

    fetchBranchData();
  }, []);

  return (
    <div className='group flex h-5 w-full items-center gap-3 text-xs max-md:justify-end'>
      Last Update
      {writeDay && (
        <Badge className='tracking-wide'>
          {writeDay.format('YYYY-MM-DD')} (D {dayDiff > 0 ? `+ ${dayDiff}` : 'Day'})
        </Badge>
      )}
      <span className='text-xs font-medium opacity-0 transition-all group-hover:opacity-100'>
        Using by github api
      </span>
    </div>
  );
};
