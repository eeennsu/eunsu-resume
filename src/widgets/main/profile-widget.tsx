import { type FC } from 'react'
import { ProfileHeader } from '@/features'
import { PROFILE } from '@/lib/constants'
import { LastUpdate, ProfileItem } from '@/shared'
import Image from 'next/image'

export const ProfileWidget: FC = () => {
    return (
        <section className='flex w-full gap-4 md:gap-[30px] pt-5 max-md:flex-col max-md:items-center'>
            <ProfileHeader />
            <Image
                src='/images/me.jpg'
                alt='my-image'
                width={220}
                height={220}
                className='rounded-md'
                priority
            />
            <div className='flex flex-col gap-3 md:gap-7 w-full justify-center max-md:items-center'>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-4xl font-semibold'>{PROFILE.name}</h1>
                    <p className='text-gray-500 text-sm pl-1 tracking-wide'>{PROFILE.birthDay}</p>
                </div>
                <div className='flex flex-col gap-2 md:gap-4 px-4'>
                    {PROFILE.descriptions.map((description) => (
                        <ProfileItem
                            key={description.value}
                            icon={description.type}
                            href={description.type === 'email' ? `mailto:${description.value}` : description.value}
                            value={description.value}
                        />
                    ))}
                </div>

                <LastUpdate />
            </div>
        </section>
    )
}
