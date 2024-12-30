import { Github, Mail, NotebookPen } from 'lucide-react'
import Link from 'next/link'
import type { FC, ReactNode } from 'react'

const Icon = {
    mail: <Mail />,
    github: <Github />,
    blog: <NotebookPen />,
}

interface Props {
    icon: keyof typeof Icon
    href: string
    value: ReactNode
}

export const ProfileItem: FC<Props> = ({ icon, href, value }) => {
    const IconComp = Icon[icon]

    return (
        <div className='flex items-center gap-3 md:gap-6'>
            {IconComp}
            <Link
                href={href}
                className='hover:underline underline-offset-2 max-md:text-sm text-blue-500'
            >
                {value}
            </Link>
        </div>
    )
}
