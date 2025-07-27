import SectionTitle from '@shared/components/SectionTitle';
import type { FC } from 'react';

import SkillCard from '@features/skill/ui/Card';

import { SKILL } from '@entities/skill/consts';

const SkillsWidget: FC = () => {
  return (
    <section className='flex w-full max-md:flex-col max-md:gap-2'>
      <SectionTitle>Skills</SectionTitle>
      <div className='flex w-full flex-col gap-2'>
        <div className='flex flex-col'>
          {SKILL.map((skill, index) => (
            <SkillCard key={index} name={skill.category} detailList={skill.items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsWidget;
