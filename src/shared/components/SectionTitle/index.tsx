import type { FC, PropsWithChildren } from 'react';

const SectionTitle: FC<PropsWithChildren> = ({ children }) => {
  return (
    <h2 className='open-sans text-3xl font-semibold text-blue-500 max-md:w-full md:min-w-[240px]'>
      {children}
    </h2>
  );
};

export default SectionTitle;
