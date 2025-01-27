import type { FC } from 'react'
import { ActivityCard } from '@/features'
import { SectionTitle } from '@/shared'
import { EXPERIENCE } from '@/lib/constants'

export const ExperienceWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Experience</SectionTitle>
            <div className='flex flex-col gap-8 md:gap-12 flex-grow'>
                {Object.values(EXPERIENCE).map((experience) => (
                    <div
                        key={experience.company}
                        className='flex flex-col gap-7'
                    >
                        <div className='flex flex-col gap-0.5'>
                            <h3 className='text-2xl md:text-3xl font-semibold'>{experience.company}</h3>
                            <p className='text-base md:text-lg'>{experience.startDate} ~ 현재</p>
                        </div>

                        {experience.activities.map((activity, i) => (
                            <ActivityCard
                                key={i}
                                startDate={activity.startDate}
                                endDate={activity.endDate}
                                title={activity.title}
                                doneList={activity.doneList}
                            />
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
