import { EDUCATION } from '@lib/constants';
import { SectionTitle } from '@shared/section-title';

import type { FC } from 'react';

export const EducationWidget: FC = () => {
  return (
    <section className='flex w-full max-md:flex-col max-md:gap-2'>
      <SectionTitle>Education</SectionTitle>
      <div className='flex flex-col gap-4'>
        <div className='flex flex-col-reverse gap-0.5 md:flex-col'>
          <p className='text-sm md:text-xl'>
            {EDUCATION.startDate} ~ {EDUCATION.endDate}
          </p>
          <h3 className='text-xl font-semibold md:text-2xl'>
            {EDUCATION.schoolName}
            &nbsp;
            <span className='ml-1 text-sm font-medium text-gray-800 md:text-lg'>
              {EDUCATION.department}
            </span>
          </h3>
        </div>
        <ul className='ml-4 list-outside list-disc'>
          {EDUCATION.activities.map(activity => (
            <li key={activity}>{activity}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
