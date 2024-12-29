import { Badge } from '@/shared'
import { Github } from 'lucide-react'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
    name: string
    descriptionList: string[]
    githubLink: string
    siteLink?: string
    isTopItem?: boolean
    tools: string[]
}

export const PortfolioCard: FC<Props> = ({ name, descriptionList, githubLink, siteLink, isTopItem, tools }) => {
    return (
        <div className={twMerge('flex flex-col gap-4 even:border-r-0 border-b border-r px-6', isTopItem ? 'pb-8' : 'py-8')}>
            <div className='grid grid-cols-6 gap-2 border-gray-400'>
                <h3 className='col-span-2 font-semibold text-gray-800 text-xl'>{name}</h3>
                <ul className='w-full col-span-4 list-disc list-inside '>
                    {descriptionList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                    <li>
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
