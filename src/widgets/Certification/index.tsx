import SectionTitle from '@shared/components/SectionTitle';
import type { FC } from 'react';

import { CERTIFICATIONS } from '@entities/certification/consts';

const CertificationsWidget: FC = () => {
  return (
    <section className='flex w-full max-md:flex-col max-md:gap-2'>
      <SectionTitle>Certifications</SectionTitle>

      <div className='flex flex-col gap-7'>
        <ul className='list-inside list-disc'>
          {CERTIFICATIONS.map((certification, index) => (
            <li key={index}>
              {certification.title}
              <span className='text-sm'>
                {certification.detail && ` (${certification.detail})`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CertificationsWidget;
