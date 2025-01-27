import {
    EducationWidget,
    ExperienceWidget,
    IntroduceWidget,
    PortfolioWidget,
    ProfileWidget,
    CertificationsWidget,
    SkillsWidget,
} from '@/widgets/main'
import { FC } from 'react'

const HomePage: FC = async () => {
    return (
        <main className='flex flex-col gap-14 md:gap-16'>
            <ProfileWidget />
            <IntroduceWidget />
            <ExperienceWidget />
            <SkillsWidget />
            <PortfolioWidget />
            <EducationWidget />
            <CertificationsWidget />
        </main>
    )
}

export default HomePage

export const dynamic = 'force-dynamic'
