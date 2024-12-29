import { Noto_Sans_KR, Open_Sans } from 'next/font/google'

export const notoSansKr = Noto_Sans_KR({
    weight: '400',
    display: 'fallback',
    subsets: ['latin'],
    style: 'normal',
    variable: '--noto-sans_KR-bold',
    fallback: ['system-ui'],
})

export const openSans = Open_Sans({
    weight: '400',
    display: 'fallback',
    subsets: ['latin'],
    style: 'normal',
    variable: '--open-sans-bold',
    fallback: ['system-ui'],
})
