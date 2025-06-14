import { type FC } from 'react';

import ProfileHeader from '@features/portfolio/ui/Header';
import ProfileItem from '@features/profile/ui/Item';
import LastUpdate from '@features/profile/ui/LastUpdate';

import { PROFILE } from '@entities/profile/consts';

const ProfileWidget: FC = () => {
  return (
    <section className='w-full py-10'>
      <ProfileHeader />
      <div className='mx-auto flex flex-col justify-between gap-6 px-10 text-center md:flex-row md:text-left'>
        <div className='flex items-center gap-14'>
          <figure className='relative max-w-40 shrink-0 md:max-w-52'>
            <img
              src='/images/profile.jpg'
              alt='my-image'
              className='w-full rounded-xl object-cover shadow-md'
            />
          </figure>

          <div className='flex flex-col gap-6'>
            <div>
              <h1 className='font-serif text-3xl font-semibold text-gray-900'>{PROFILE.name}</h1>
              <p className='text-md text-gray-500'>{PROFILE.birthDay}</p>
            </div>

            <div className='flex flex-col gap-3 text-sm md:text-base'>
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
          </div>
        </div>
        <LastUpdate />
      </div>
    </section>
  );
};

export default ProfileWidget;
