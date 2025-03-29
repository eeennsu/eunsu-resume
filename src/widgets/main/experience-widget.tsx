import type { FC } from 'react'
import { ActivityCard } from '@/features'
import { SectionTitle } from '@/shared'
import { EXPERIENCES } from '@/lib/constants'
import { getCompanyServiceDuration } from '@/lib/utils'
import { Badge } from '@/shared/common'
import { CircleHelp } from 'lucide-react'
import { CompanyNoteModal } from '@/features/company-note-modal'

export const ExperienceWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Experience</SectionTitle>
            <div className='flex flex-col gap-8 md:gap-12 flex-grow'>
                {EXPERIENCES.map((experience) => (
                    <div
                        key={experience.company}
                        className='flex flex-col gap-9 md:gap-2.5'
                    >
                        <div className='flex md:justify-between flex-col md:flex-row md:gap-0 gap-2'>
                            <div className='flex items-center h-fit gap-2'>
                                <h3 className='text-2xl md:text-3xl font-semibold'>{experience.company}</h3>
                                {experience.endDate && experience.note && (
                                    <CompanyNoteModal note={experience.note}>
                                        <CircleHelp className='text-gray-600' />
                                    </CompanyNoteModal>
                                )}
                            </div>

                            <div className='flex justify-between md:flex-col gap-1 items-center md:items-end'>
                                <p className=''>
                                    {experience.startDate} ~ {experience?.endDate || '현재'}
                                </p>
                                {experience.endDate && (
                                    <Badge size='lg'>
                                        총 {getCompanyServiceDuration(experience.startDate, experience.endDate)} 근무
                                    </Badge>
                                )}
                            </div>
                        </div>
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
                ))}
            </div>
        </section>
    )
}
