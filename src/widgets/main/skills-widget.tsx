import { SkillCard } from '@features/skill-card';
import { SKILL } from '@lib/constants';
import { SectionTitle } from '@shared/section-title';
import type { FC } from 'react';

export const SkillsWidget: FC = () => {
  return (
    <section className='flex w-full max-md:flex-col max-md:gap-2'>
      <SectionTitle>Skills</SectionTitle>
      <div className='flex w-full flex-col gap-2'>
        <p className='text-sm text-gray-500'>경험치 및 선호도 순서로 나열하였습니다.</p>
        <div className='flex flex-col'>
          {SKILL.map(skill => (
            <SkillCard key={skill.category} name={skill.category} detailList={skill.items} />
          ))}
        </div>
      </div>
    </section>
  );
};
