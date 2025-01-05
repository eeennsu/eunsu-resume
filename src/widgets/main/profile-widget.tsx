'use client'

import Image from 'next/image'
import { type FC } from 'react'
import dayjs from 'dayjs'
import { Badge } from '@/shared/ui'
import { Header } from '../layout'
import { ProfileItem } from '@/shared'
import { PROFILE } from '@/lib/constants'
import { useVisibilityObserver } from '@/lib/hooks'

export const ProfileWidget: FC = () => {
    const [isHeaderVisible, profileRef] = useVisibilityObserver<HTMLDivElement>()

    const getDDay = () => {
        const now = dayjs()
        const writeDay = dayjs(PROFILE.writeDay)

        return now.diff(writeDay, 'day')
    }

    return (
        <>
            <section
                ref={profileRef}
                className='flex w-full gap-4 md:gap-[30px] pt-5 max-md:flex-col max-md:items-center'
            >
                <Image
                    src='/images/me.jpg'
                    alt='my-image'
                    width={260}
                    height={400}
                    className='rounded-md'
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
                            {PROFILE.writeDay} (D + {getDDay() || 'Day'})
                        </Badge>
                    </div>
                </div>
            </section>
            <Header isHeaderVisible={isHeaderVisible} />
        </>
    )
}
