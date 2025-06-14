import SectionTitle from '@shared/components/SectionTitle';
import type { FC } from 'react';

import { INTRODUCE } from '@entities/introduce/consts';

const IntroduceWidget: FC = () => {
  return (
    <section className='flex w-full max-md:flex-col max-md:gap-2'>
      <SectionTitle>Introduce</SectionTitle>
      <div className='flex flex-grow flex-col gap-2'>
        <div className='flex flex-col gap-4 break-keep text-lg'>
          {INTRODUCE.map((intro, index) => (
            <p key={index}>{intro}</p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroduceWidget;
