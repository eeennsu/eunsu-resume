import { EDUCATION } from '@/lib/constants'
import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const EducationWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Education</SectionTitle>
            <div className='flex flex-col gap-4'>
                <div className='flex flex-col-reverse md:flex-col gap-0.5'>
                    <p className='text-sm md:text-xl'>
                        {EDUCATION.startDate} ~ {EDUCATION.endDate}
                    </p>
                    <h3 className='text-xl md:text-2xl font-semibold'>
                        {EDUCATION.schoolName}
                        &nbsp;
                        <span className='font-medium text-sm md:text-lg ml-1 text-gray-800'>{EDUCATION.department}</span>
                    </h3>
                </div>
                <ul className='list-disc list-inside'>
                    {EDUCATION.activities.map((activity, i) => (
                        <li key={i}>{activity}</li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
