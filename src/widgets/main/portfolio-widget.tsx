import { PortfolioCard } from '@/features'
import { PORTFOLIOS } from '@/lib/constants'
import { SectionTitle } from '@/shared'
import type { FC } from 'react'

export const PortfolioWidget: FC = () => {
    return (
        <section className='flex w-full max-md:flex-col max-md:gap-2'>
            <SectionTitle>Portfolio</SectionTitle>

            <div className='grid md:grid-cols-2 w-full'>
                {PORTFOLIOS.map((portfolio) => (
                    <PortfolioCard
                        key={portfolio.name}
                        name={portfolio.name}
                        descriptionList={portfolio.descriptionList}
                        githubLink={portfolio.githubLink}
                        siteLink={portfolio.siteLink}
                        tools={portfolio.tools}
                    />
                ))}
            </div>
        </section>
    )
}
