import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const EducationWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Education</SectionTitle>
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col-reverse md:flex-col gap-0.5'>
                    <p className='text-sm md:text-xl'>2022.03.02 ~ 2024.02.28</p>
                    <h3 className='text-xl md:text-2xl font-medium'>
                        명지전문대학교
                        <span className='font-normal text-sm md:text-lg ml-1 text-gray-600'>소프트웨어 콘텐츠학과</span>
                    </h3>
                </div>
                <ul className='list-disc list-inside'>
                    <li>학점 4.26 졸업</li>
                    <li>웹 개발 동아리 운영 (부장) 및 프로젝트 개발 주도 (2022.06 ~ 2024.02)</li>
                    <li>기자재 대여 시스템 사이트 / 주변 맛집 등 명소를 찾는 사이트 / 2D 로그라이크 앱 게임 등 개발</li>
                </ul>
            </div>
        </section>
    )
}
