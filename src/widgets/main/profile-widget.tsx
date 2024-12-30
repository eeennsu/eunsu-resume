'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type FC } from 'react'
import { Github, Mail, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Badge } from '@/shared/ui'
import { Header } from '../layout'
import { ProfileItem } from '@/shared'

export const ProfileWidget: FC = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(false)
    const profileRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry) {
                    setIsHeaderVisible(!entry.isIntersecting)
                }
            },
            {
                threshold: 0,
            }
        )

        if (profileRef.current) {
            observer.observe(profileRef.current)
        }

        return () => {
            if (profileRef.current) {
                observer.unobserve(profileRef.current)
            }
        }
    }, [])

    const dDay = () => {
        const now = dayjs()
        const writeDay = dayjs('2024-12-30')
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
                        <h1 className='text-4xl font-semibold'>방은수</h1>
                        <p className='text-gray-500 text-sm pl-1 tracking-wide'>1999.01.21</p>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 px-4'>
                        <ProfileItem
                            icon='mail'
                            href='mailto:xxx592@naver.com'
                            value='xxx592@naver.com'
                        />

                        <ProfileItem
                            icon='github'
                            href='https://github.com/eeennsu'
                            value='https://github.com/eeennsu'
                        />

                        <ProfileItem
                            icon='blog'
                            href='https://velog.io/@diso592/posts'
                            value={<>https://velog.io/@diso592/posts (기술 블로그)</>}
                        />
                        <ProfileItem
                            icon='blog'
                            href='https://eunstory.eunsu.kr'
                            value={<>https://eunstory.eunsu.kr (회고 블로그)</>}
                        />

                        {/* <div className='flex items-center gap-3 md:gap-6'>
                            <NotebookPen strokeWidth={2.2} />
                            <p className='flex items-center gap-2'>
                                <Link
                                    href='https://velog.io/@diso592/posts'
                                    className='hover:underline underline-offset-2 max-md:text-sm text-blue-500'
                                >
                                    https://velog.io/@diso592/posts
                                </Link>
                                <span className='text-gray-500 text-xs'>(기술 블로그)</span>
                            </p>
                        </div>

                        <div className='flex items-center gap-3 md:gap-6'>
                            <NotebookPen strokeWidth={2.2} />
                            <p className='flex items-center gap-2'>
                                <Link
                                    href='https://eunstory.eunsu.kr'
                                    className='hover:underline underline-offset-2 max-md:text-sm text-blue-500'
                                >
                                    https://eunstory.eunsu.kr
                                </Link>
                                <span className='text-gray-500 text-xs'>(회고 블로그)</span>
                            </p>
                        </div> */}
                    </div>

                    <div className='w-full flex items-center gap-3 text-xs max-md:justify-end'>
                        Last Update
                        <Badge variant='primary'>2024-12-30 (D + {dDay()})</Badge>
                    </div>
                </div>
            </section>
            <Header isHeaderVisible={isHeaderVisible} />
        </>
    )
}
