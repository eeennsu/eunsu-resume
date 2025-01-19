import type { Metadata } from 'next'
import { Footer } from '@/widgets/layout'
import { notoSansKr } from '@/lib/font'
import { SITE_URL } from '@/lib/constants'
import './globals.css'

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: '방은수 이력서',
    description: 'Next.js 와 Typescript로 개발을 하는 프론트엔드 개발자 방은수의 이력서입니다.',
    authors: [
        {
            name: '방은수',
            url: SITE_URL,
        },
    ],
    twitter: {
        title: '방은수 - 프론트엔드 개발자 이력서',
        description: 'Next.js 와 Typescript로 개발을 하는 프론트엔드 개발자 방은수의 이력서입니다.',
    },
    robots: 'index, follow',
    alternates: {
        canonical: SITE_URL,
        languages: {
            en: '/en',
            ko: '/',
        },
    },
    openGraph: {
        type: 'website',
        url: SITE_URL,
        title: '방은수 - 프론트엔드 개발자 이력서',
        description: 'Next.js 와 Typescript로 개발을 하는 프론트엔드 개발자 방은수의 이력서입니다.',
        locale: 'ko_KR',
    },
    keywords:
        '프론트엔드 개발자, 방은수, 이력서, 포트폴리오, Bang Eunsu, React.js, React, Next.js, Next, Typescript, ts, Frontend Developer, Resume, Portfolio',
    verification: {
        google: 'iuUmYGMaAlJLTlxek5zq277cmScF6x6jFXJ_MqQcaWI',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='ko'>
            <body className={`${notoSansKr.className} antialiased`}>
                <div className='min-h-screen bg-white'>
                    <div className='max-w-screen-xl mx-auto px-3 xl:px-0'>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
