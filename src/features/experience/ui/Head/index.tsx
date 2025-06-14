import { getCompanyServiceDuration } from '@shared/libs/date';
import { CircleHelp } from 'lucide-react';
import type { FC } from 'react';

import { ICompanyExperience } from '@entities/experience/types';

import CompanyNoteModal from '../CompanyNoteModal';

type Props = {
  experience: ICompanyExperience;
};

const ExperienceHead: FC<Props> = ({ experience }) => {
  return (
    <div className='flex flex-col gap-2 md:flex-row md:justify-between md:gap-0'>
      <div className='flex h-fit items-center gap-2'>
        <h3 className='rounded-sm bg-gray-900 p-2 text-xl font-semibold text-white md:px-3 md:py-1.5 md:text-2xl'>
          {experience.companyName}
        </h3>
        {experience.endDate && experience.note && (
          <CompanyNoteModal note={experience.note}>
            <CircleHelp className='text-gray-600' />
          </CompanyNoteModal>
        )}
      </div>

      <div className='flex items-center justify-between gap-1 md:flex-col md:items-end'>
        <p className='font-bold'>
          {experience.startDate} ~ {experience?.endDate || '현재'}
        </p>
        {experience.endDate && (
          <span className='text-sm'>
            (총 {getCompanyServiceDuration(experience.startDate, experience.endDate)} 근무)
          </span>
        )}
      </div>
    </div>
  );
};

export default ExperienceHead;
