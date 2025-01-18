import { type FC } from 'react'
import { Badge } from '@/shared/ui'
import { ProfileItem } from '@/shared'
import { PROFILE } from '@/lib/constants'
import { ProfileHeader } from '@/features/profile-header'
import { fetchHandler } from '@/lib/api/next-api'
import Image from 'next/image'
import dayjs from 'dayjs'
import { ResponseGitHubBranch } from '@/entity/github/github.types'

export const ProfileWidget: FC = async () => {
    const branchResp = await fetchHandler<ResponseGitHubBranch>('/github/branch')

    const now = dayjs()
    const writeDay = dayjs(branchResp.commit.commit.author.date) || now.subtract(8, 'day')

    return (
        <section className='flex w-full gap-4 md:gap-[30px] pt-5 max-md:flex-col max-md:items-center'>
            <ProfileHeader />
            <Image
                src='/images/me.jpg'
                alt='my-image'
                width={220}
                height={220}
                className='rounded-md'
                priority
            />
            <div className='flex flex-col gap-3 md:gap-7 w-full justify-center max-md:items-center'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-4xl font-semibold'>{PROFILE.name}</h1>
                    <p className='text-gray-500 text-sm pl-1 tracking-wide'>{PROFILE.birthDay}</p>
                </div>
                <div className='flex flex-col gap-2 md:gap-4 px-4'>
                    {PROFILE.descriptions.map((description, i) => (
                        <ProfileItem
                            key={i}
                            icon={description.type}
                            href={description.type === 'email' ? `mailto:${description.value}` : description.value}
                            value={description.value}
                        />
                    ))}
                </div>

                <div className='w-full flex items-center gap-3 text-xs max-md:justify-end'>
                    Last Update
                    <Badge variant='primary'>
                        {writeDay.format('YYYY-MM-DD')} (D + {now.diff(writeDay, 'day') || 'Day'})
                    </Badge>
                </div>
            </div>
        </section>
    )
}
