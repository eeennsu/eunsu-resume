'use client'

import dayjs, { Dayjs } from 'dayjs'
import { fetchHandler } from '@/lib/api/next-api'
import { ResponseGitHubBranch } from '@/entity/github'
import { Badge } from '@/shared/common'
import { useEffect, useState, type FC } from 'react'

export const LastUpdate: FC = () => {
    const [writeDay, setWriteDay] = useState<Dayjs>(dayjs().subtract(8, 'day'))
    const [dayDiff, setDayDiff] = useState<number>(0)

    useEffect(() => {
        async function fetchBranchData() {
            const branchResp = await fetchHandler<ResponseGitHubBranch>('/github/branch', { next: { revalidate: 60 * 60 } })
            const now = dayjs().startOf('day')
            const commitDate = branchResp.commit.commit.author.date
                ? dayjs(branchResp.commit.commit.author.date).startOf('day')
                : now.subtract(8, 'day')

            setWriteDay(commitDate)
            setDayDiff(now.diff(commitDate, 'day'))
        }

        fetchBranchData()
    }, [])

    return (
        <div className='w-full flex items-center gap-3 text-xs max-md:justify-end group'>
            Last Update
            <Badge
                className='tracking-wide'
                variant='primary'
            >
                {writeDay.format('YYYY-MM-DD')} (D {dayDiff > 0 ? `+ ${dayDiff}` : 'Day'})
            </Badge>
            <span className='text-xs font-medium group-hover:opacity-100 opacity-0 transition-all'>Using by github api</span>
        </div>
    )
}
