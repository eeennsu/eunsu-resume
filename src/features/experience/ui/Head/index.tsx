import Badge from '@shared/components/Badge';
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
        <h3 className='text-2xl font-semibold md:text-3xl'>{experience.companyName}</h3>
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
          <Badge size='lg'>
            총 {getCompanyServiceDuration(experience.startDate, experience.endDate)} 근무
          </Badge>
        )}
      </div>
    </div>
  );
};

export default ExperienceHead;
