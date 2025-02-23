import { Badge } from '@/shared/common'
import { FC } from 'react'
import { twMerge } from 'tailwind-merge'
import Link from 'next/link'

interface Props {
    name: string
    descriptionList: string[]
    githubLink: string
    siteLink?: string
    tools: string[]
}

export const PortfolioCard: FC<Props> = ({ name, descriptionList, githubLink, siteLink, tools }) => {
    return (
        <div className={twMerge('flex flex-col gap-4 even:border-r-0 border-b border-r p-6')}>
            <div className='grid grid-cols-6 gap-2 border-gray-400'>
                <h3 className='col-span-3 md:col-span-2 font-semibold text-gray-800 text-lg md:text-xl'>{name}</h3>
                <ul className='w-full col-span-3 md:col-span-4 list-disc list-outside text-sm md:text-base ml-4 md:ml-0'>
                    {descriptionList.map((description) => (
                        <li key={description}>{description}</li>
                    ))}
                    <li className='max-md:text-sm'>
                        <Link
                            href={githubLink}
                            target='_blank'
                            className='underline underline-offset-2 text-blue-500'
                            rel='noopener noreferrer'
                        >
                            깃허브 주소
                        </Link>
                    </li>
                    {siteLink && (
                        <li>
                            <Link
                                href={siteLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='underline underline-offset-2 text-blue-500'
                            >
                                사이트 주소
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
            <div className='flex flex-wrap gap-2'>
                {tools.map((tool) => (
                    <Badge
                        variant='tertiary'
                        key={tool}
                    >
                        {tool}
                    </Badge>
                ))}
            </div>
        </div>
    )
}
