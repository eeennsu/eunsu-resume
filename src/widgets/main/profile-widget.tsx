'use client'

import Image from 'next/image'
import { useEffect, useRef, useState, type FC } from 'react'
import { Github, Mail, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import dayjs from 'dayjs'
import { Badge } from '@/shared'
import { Header } from '../layout'

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
                className='flex w-full gap-[30px] pt-5'
            >
                <Image
                    src='/images/dummy.jpg'
                    alt='my-image'
                    width={280}
                    height={400}
                />
                <div className='flex flex-col gap-7 w-full justify-center'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='text-4xl font-semibold'>방은수</h1>
                        <p className='text-gray-500 text-sm pl-1 tracking-wide'>1999.01.21</p>
                    </div>
                    <div className='flex flex-col gap-4 px-4'>
                        <div className='flex items-center gap-6'>
                            <Mail strokeWidth={2.2} />
                            <Link
                                href='mailto:xxx592@naver.com'
                                className='hover:underline underline-offset-2 text-blue-500'
                            >
                                xxx592@naver.com
                            </Link>
                        </div>

                        <div className='flex items-center gap-6'>
                            <Github strokeWidth={2.2} />
                            <Link
                                href='https://github.com/eeennsu'
                                className='hover:underline underline-offset-2 text-blue-500'
                            >
                                https://github.com/eeennsu
                            </Link>
                        </div>

                        <div className='flex items-center gap-6'>
                            <NotebookPen strokeWidth={2.2} />
                            <p className='flex items-center gap-2'>
                                <Link
                                    href='https://velog.io/@diso592/posts'
                                    className='hover:underline underline-offset-2 text-blue-500'
                                >
                                    https://velog.io/@diso592/posts
                                </Link>
                                <span className='text-gray-500 text-xs'>(기술 블로그)</span>
                            </p>
                        </div>

                        <div className='flex items-center gap-6'>
                            <NotebookPen strokeWidth={2.2} />
                            <p className='flex items-center gap-2'>
                                <Link
                                    href='https://eunstory.eunsu.kr'
                                    className='hover:underline underline-offset-2 text-blue-500'
                                >
                                    https://eunstory.eunsu.kr
                                </Link>
                                <span className='text-gray-500 text-xs'>(회고 블로그)</span>
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex items-center gap-3 text-xs'>
                        Last Update
                        <Badge variant='primary'>2024-12-30 (D + {dDay()})</Badge>
                    </div>
                </div>
            </section>
            <Header isHeaderVisible={isHeaderVisible} />
        </>
    )
}
