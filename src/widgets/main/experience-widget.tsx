import type { FC } from 'react'
import { ActivityCard, ExperienceHead } from '@/features'
import { SectionTitle } from '@/shared'
import { EXPERIENCES } from '@/lib/constants'

export const ExperienceWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Experience</SectionTitle>
            <div className='flex flex-col gap-8 md:gap-12 flex-grow'>
                {EXPERIENCES.map((experience, i) => (
                    <div key={experience.companyName}>
                        <div className='flex flex-col gap-5 md:gap-3'>
                            <ExperienceHead experience={experience} />

                            <div className='flex flex-col gap-7 md:gap-4'>
                                {experience.activities.map((activity) => (
                                    <ActivityCard
                                        key={activity.title}
                                        startDate={activity.startDate}
                                        endDate={activity.endDate}
                                        title={activity.title}
                                        doneList={activity.doneList}
                                    />
                                ))}
                            </div>
                        </div>

                        {i !== EXPERIENCES.length - 1 && <div className='w-full border-b-2 border-gray-600 pb-10' />}
                    </div>
                ))}
            </div>
        </section>
    )
}
