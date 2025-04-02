import type { FC } from 'react'
import { CompanyNoteModal } from './company-note-modal'
import { CircleHelp } from 'lucide-react'
import { Badge } from '@/shared/common'
import { getCompanyServiceDuration } from '@/lib/utils'

type Props = {
    experience: CompanyExperience
}

export const ExperienceHead: FC<Props> = ({ experience }) => {
    return (
        <div className='flex md:justify-between flex-col md:flex-row md:gap-0 gap-2'>
            <div className='flex items-center h-fit gap-2'>
                <h3 className='text-2xl md:text-3xl font-semibold'>{experience.companyName}</h3>
                {experience.endDate && experience.note && (
                    <CompanyNoteModal note={experience.note}>
                        <CircleHelp className='text-gray-600' />
                    </CompanyNoteModal>
                )}
            </div>

            <div className='flex justify-between md:flex-col gap-1 items-center md:items-end'>
                <p className='font-bold'>
                    {experience.startDate} ~ {experience?.endDate || '현재'}
                </p>
                {experience.endDate && (
                    <Badge size='lg'>총 {getCompanyServiceDuration(experience.startDate, experience.endDate)} 근무</Badge>
                )}
            </div>
        </div>
    )
}
