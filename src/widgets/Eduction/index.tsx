import SectionTitle from '@shared/components/SectionTitle';
import type { FC } from 'react';

import { EDUCATION } from '@entities/education/consts';

const EducationWidget: FC = () => {
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
          {EDUCATION.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EducationWidget;
