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
        <main className='flex flex-col gap-10 md:gap-20 max-md:px-3'>
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
