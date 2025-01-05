import { INTRODUCE } from '@/lib/constants'
import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const IntroduceWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Introduce</SectionTitle>
            <div className='flex flex-col gap-2 flex-grow'>
                <div className='flex text-lg  flex-col gap-4 break-keep'>
                    {INTRODUCE.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </div>
            </div>
        </section>
    )
}
