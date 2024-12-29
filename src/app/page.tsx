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
        <main className='flex flex-col gap-20'>
            <ProfileWidget />
            <IntroduceWidget />
            <ExperienceWidget />
            <SkillsWidget />
            <PortfolioWidget />
            <EducationWidget />
            <CertificationsWidget />
            {/* <PortfolioWidget /> */}
        </main>
    )
}

export default HomePage
