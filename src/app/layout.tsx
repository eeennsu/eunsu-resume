import { SITE_URL } from '@shared/consts/commons';
import '@shared/css/globals.css';
import { notoSansKr } from '@shared/font/fonts';
import type { Metadata } from 'next';

import Footer from '@widgets/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: '방은수 이력서',
  description:
    'typescript, react.js, next.js로 개발을 하는 프론트엔드 개발자 방은수의 이력서입니다.',
  authors: [
    {
      name: '방은수',
      url: 'https://github.com/eeennsu',
    },
  ],
  twitter: {
    title: '방은수 - 프론트엔드 개발자 이력서',
    description:
      'typescript, react.js, next.js로 개발을 하는 프론트엔드 개발자 방은수의 이력서입니다.',
  },
  robots: {
    index: true,
    follow: true,
  },
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
    description:
      'typescript, react.js, next.js로 개발을 하는 프론트엔드 개발자 방은수의 이력서입니다.',
    locale: 'ko_KR',
  },
  keywords:
    '프론트엔드 개발자, 방은수, 이력서, 포트폴리오, Bang Eunsu, React.js, React, Next.js, Next, Typescript, ts, Javascript, js, Frontend Developer, Resume, Portfolio',
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: '-gVPli_Efm-GOJTalY42H0Wtz_NhSRCUZleJ8MuQRmU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <body className={`${notoSansKr.className} antialiased`}>
        <div className='flex min-h-screen flex-col bg-white'>
          <div className='mx-auto max-w-(--breakpoint-xl) grow px-3 xl:px-0'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
