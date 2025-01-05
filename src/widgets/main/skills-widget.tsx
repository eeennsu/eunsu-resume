import { SkillCard } from '@/features'
import { SKILL } from '@/lib/constants'
import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const SkillsWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Skills</SectionTitle>
            <div className='flex flex-col w-full gap-2'>
                <p className='text-sm text-gray-500'>경험치 및 선호도 순서로 나열하였습니다.</p>
                <div className='flex flex-col gap-8'>
                    {SKILL.map((skill) => (
                        <SkillCard
                            key={skill.category}
                            name={skill.category}
                            detailList={skill.items}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
