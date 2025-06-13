

import { ProfileHeader } from '@features/profile-header';
import { PROFILE } from '@lib/constants';
import { LastUpdate } from '@shared/last-update';
import { ProfileItem } from '@shared/profile-item';
import Image from 'next/image';
import { type FC } from 'react';

export const ProfileWidget: FC = () => {
  return (
    <section className='flex w-full gap-4 pt-5 max-md:flex-col max-md:items-center md:gap-[30px]'>
      <ProfileHeader
       />
      <Image
        src='/images/me.jpg'
        alt='my-image'
        width={220}
        height={220}
        className='rounded-md'
        priority
      />
      <div className='flex w-full flex-col justify-center gap-3 max-md:items-center md:gap-7'>
        <div className='flex flex-col gap-1'>
          <h1 className='text-4xl font-semibold'>{PROFILE.name}</h1>
          <p className='pl-1 text-sm tracking-wide text-gray-500'>{PROFILE.birthDay}</p>
        </div>
        <div className='flex flex-col gap-2 px-4 md:gap-4'>
          {PROFILE.descriptions.map(description => (
            <ProfileItem
              key={description.value}
              icon={description.type}
              href={
                description.type === 'email' ? `mailto:${description.value}` : description.value
              }
              value={description.value}
            />
          ))}
        </div>

        <LastUpdate />
      </div>
    </section>
  );
};
