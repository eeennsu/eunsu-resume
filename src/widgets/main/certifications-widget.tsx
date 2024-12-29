import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const CertificationsWidget: FC = () => {
    return (
        <section className='flex w-full'>
            <SectionTitle>Certifications</SectionTitle>

            <div className='flex flex-col gap-7'>
                <ul className='list-disc list-inside'>
                    <li>TOEIC (615점)</li>
                    <li>워드프로세서</li>
                    <li>컴퓨터 활용능력 1급</li>
                    <li className='text-gray-600'>정보처리산업기사 (필기 합격, 실기 준비 중중)</li>
                </ul>
            </div>
        </section>
    )
}
