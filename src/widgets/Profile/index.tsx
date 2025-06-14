import { type FC } from 'react';

import ProfileHeader from '@features/portfolio/ui/Header';
import ProfileItem from '@features/profile/ui/Item';
import LastUpdate from '@features/profile/ui/LastUpdate';

import { PROFILE } from '@entities/profile/consts';

const ProfileWidget: FC = () => {
  return (
    <section className='w-full pt-5 md:py-6'>
      <ProfileHeader />
      <div className='flex flex-col px-4 text-center md:mx-auto md:flex-row md:justify-between md:px-10 md:text-left'>
        <div className='flex items-center justify-center gap-8 md:justify-start md:gap-14'>
          <figure className='relative max-w-48 shrink-0 md:max-w-52'>
            <img
              src='/images/profile.jpg'
              alt='profile'
              className='w-full rounded-xl object-cover shadow-md'
            />
          </figure>

          <div className='flex flex-col gap-6'>
            <div>
              <h1 className='font-serif text-3xl font-semibold text-gray-900'>{PROFILE.name}</h1>
              <p className='text-md text-gray-500'>{PROFILE.birthDay}</p>
            </div>

            <div className='flex flex-col gap-3 text-sm md:text-base'>
              {PROFILE.descriptions.map((description, index) => (
                <ProfileItem
                  key={index}
                  icon={description.type}
                  href={
                    description.type === 'email' ? `mailto:${description.value}` : description.value
                  }
                  value={description.value}
                />
              ))}
            </div>
          </div>
        </div>
        <LastUpdate />
      </div>
    </section>
  );
};

export default ProfileWidget;
