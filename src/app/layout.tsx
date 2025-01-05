import type { Metadata } from 'next'
import { Footer } from '@/widgets/layout'
import { notoSansKr } from '@/lib/font'
import './globals.css'

export const metadata: Metadata = {
    title: '방은수 이력서',
    description:
        '방은수 프론트엔드 개발자의 포트폴리오와 전문적인 이력서를 확인해보세요. React와 Next.js를 활용한 프로젝트 경험과 기술 스택을 소개합니다.',
    keywords: '프론트엔드 개발자, 방은수, 이력서, 포트폴리오, React, Next.js, Frontend Developer, Resume, Portfolio',
    openGraph: {
        title: '방은수 - 프론트엔드 개발자 이력서',
        description: '방은수 프론트엔드 개발자의 기술 스택, 프로젝트 경험, 포트폴리오를 확인해보세요.',
        type: 'website',
        locale: 'ko_KR',
        url: 'http://eunsu-resume.eunsu.kr',
    },
    twitter: {
        title: '방은수 - 프론트엔드 개발자 이력서',
        description:
            'React와 Next.js로 전문적인 웹 개발을 수행하는 방은수 프론트엔드 개발자의 포트폴리오와 이력서를 확인해보세요.',
    },
    alternates: {
        languages: {
            en: '/en',
            ko: '/',
        },
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='ko'>
            <head>
                <meta
                    name='robots'
                    content='index, follow'
                />
                <meta
                    name='author'
                    content='방은수 (Eunsu Bang)'
                />
                <link
                    rel='canonical'
                    href='http://eunsu-resume.eunsu.kr'
                />
            </head>
            <body className={`${notoSansKr.className} antialiased`}>
                <div className='min-h-screen bg-white'>
                    <div className='max-w-screen-xl mx-auto'>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
