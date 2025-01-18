'use client'

import { useVisibilityObserver } from '@/lib/hooks'
import { Header } from '@/widgets/layout'
import { type FC } from 'react'

export const ProfileHeader: FC = () => {
    const [isHeaderVisible, profileRef] = useVisibilityObserver<HTMLDivElement>()

    return (
        <section ref={profileRef}>
            <Header isHeaderVisible={isHeaderVisible} />
        </section>
    )
}
