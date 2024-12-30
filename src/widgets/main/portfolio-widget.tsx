import { PortfolioCard } from '@/features/portfolio-card'
import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const PortfolioWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Portfolio</SectionTitle>

            <div className='grid md:grid-cols-2 w-full'>
                <PortfolioCard
                    name='Eunsutory'
                    descriptionList={['개인 회고 & 소개 블로그']}
                    githubLink='https://github.com/eeennsu/eunstory'
                    siteLink='https://eunstory.eunsu.kr/'
                    tools={['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma']}
                />

                <PortfolioCard
                    name='Scrama'
                    descriptionList={['아마존 웹 스크레핑 사이트']}
                    githubLink='https://github.com/eeennsu/scrama'
                    siteLink='https://eunstory.eunsu.kr/'
                    tools={['Next.js', 'TypeScript', 'Tailwind CSS', 'cheerio']}
                />

                <PortfolioCard
                    name='Equipment Rental System'
                    descriptionList={['대학교 동아리에서 제작한 장비 대여 시스템']}
                    githubLink='https://github.com/eeennsu/eunstory'
                    tools={['React.js', 'TypeScript', 'Express.js', 'Tailwind CSS', 'Zustand', 'Tanstack Query']}
                />

                <PortfolioCard
                    name='Eunimation'
                    descriptionList={['애니메이션 추천 사이트']}
                    githubLink='https://github.com/eeennsu/nextjs-animation-app'
                    siteLink='https://eunimation.eunsu.kr/'
                    tools={['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zustand']}
                />

                <PortfolioCard
                    name='Eunsuread'
                    descriptionList={['Thread 클론 사이트']}
                    githubLink='https://github.com/eeennsu/nextjs-thread'
                    siteLink='https://eeennsu-nextjs-thread.vercel.app/'
                    tools={['Next.js', 'TypeScript', 'Tailwind CSS', 'Clerk', 'Mongoose']}
                />

                <PortfolioCard
                    name='Movie TV Actor'
                    descriptionList={['영화 추천 사이트']}
                    githubLink='https://github.com/eeennsu/react-movie-tv-actor?tab=readme-ov-file'
                    siteLink='https://eeennsu.github.io/react-movie-tv-actor/'
                    tools={['React.js', 'TypeScript', 'Antd', 'TMDB API']}
                />
            </div>
        </section>
    )
}
