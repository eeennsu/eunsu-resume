import SectionTitle from '@shared/components/SectionTitle';
import type { FC } from 'react';

import ActivityCard from '@features/experience/ui/ActivityCard';
import ExperienceHead from '@features/experience/ui/Head';

import { EXPERIENCES } from '@entities/experience/consts';

const ExperienceWidget: FC = () => {
  return (
    <section className='flex w-full max-md:flex-col max-md:gap-2'>
      <SectionTitle>Experience</SectionTitle>
      <div className='flex flex-grow flex-col'>
        {EXPERIENCES.map((experience, i) => (
          <div key={experience.companyName}>
            <div className='flex flex-col gap-5 md:gap-3'>
              <ExperienceHead experience={experience} />

              <div className='flex flex-col gap-7 md:gap-4'>
                {experience.activities.map(activity => (
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

            {i !== EXPERIENCES.length - 1 && (
              <div className='my-20 w-full border-b border-gray-400' />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceWidget;
