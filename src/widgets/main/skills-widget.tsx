import { SkillCard } from '@/features'
import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const SkillsWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Skills</SectionTitle>
            <div className='flex flex-col w-full gap-2'>
                <p className='text-sm text-gray-500'>경험치 및 선호도 순서로 나열하였습니다.</p>
                <div className='flex flex-col gap-8'>
                    <SkillCard
                        name='Languages'
                        detailList={['JavaScript (ES6+)', 'TypeScript', 'HTML / CSS', 'Java']}
                    />

                    <SkillCard
                        name='Libraries & Frameworks'
                        detailList={['React.js (vite)', 'Next.js', 'Tailwind CSS', 'Prisma', 'Node.js', 'Express']}
                    />

                    <SkillCard
                        name='Databases & DevOps'
                        detailList={['MongoDB', 'Supabase (postgresql)', 'Docker', 'AWS S3']}
                    />

                    <SkillCard
                        name='Tools'
                        detailList={['VS Code', 'Git & GitHub', 'Notion', 'Figma']}
                    />
                </div>
            </div>
        </section>
    )
}
