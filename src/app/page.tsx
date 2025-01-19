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

const HomePage: FC = () => {
    return (
        <main className='flex flex-col gap-14 md:gap-20'>
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

export const dynamic = 'force-dynamic'

export default HomePage
