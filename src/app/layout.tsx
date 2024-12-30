import type { Metadata } from 'next'
import './globals.css'
import { Footer, Header } from '@/widgets/layout'
import { notoSansKr } from '@/lib/font'

export const metadata: Metadata = {
    title: 'Eunsu Resume',
    description:
        'Discover the portfolio and professional resume of Eunsu Bang, a frontend developer skilled in React and Next.js.',
    keywords: 'Frontend Developer, Eunsu Bang, Resume, Portfolio, React Developer, 방은수',
    openGraph: {
        title: 'Eunsu Bang - Frontend Developer Resume',
        description: 'Explore Eunsu Bang’s skills, experiences, and projects as a frontend developer.',
        type: 'website',
        locale: 'en_US',
        url: 'https://yourdomain.com',
    },
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${notoSansKr.className} antialiased`}>
                <div className='min-h-screen bg-white'>
                    <div className='max-w-screen-xl mx-auto'>{children}</div>
                    <Footer />
                </div>
            </body>
        </html>
    )
}
