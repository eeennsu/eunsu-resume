import type { FC } from 'react'
import { CERTIFICATIONS } from '@/lib/constants'
import { SectionTitle } from '@/shared'
import { twMerge } from 'tailwind-merge'

export const CertificationsWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Certifications</SectionTitle>

            <div className='flex flex-col gap-7'>
                <ul className='list-disc list-inside'>
                    {CERTIFICATIONS.map((certification, index) => (
                        <li
                            key={index}
                            className={twMerge(certification.isInProgress && 'opacity-50')}
                        >
                            {certification.title}
                            <span className='text-sm'>{certification.detail && ` (${certification.detail})`}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
