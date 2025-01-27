import { DetailedHTMLProps, FC, HTMLAttributes, PropsWithChildren } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Badge: FC<PropsWithChildren<Props>> = ({ children, variant, className, ...props }) => {
    return (
        <span
            className={twMerge(
                'font-medium text-xs rounded-[4px] py-0.5 px-1.5',
                variant === 'primary' && 'bg-slate-600 text-white',
                variant === 'secondary' && 'bg-cyan-500 text-white',
                variant === 'tertiary' && 'bg-orange-400 text-white',
                className
            )}
            {...props}
        >
            {children}
        </span>
    )
}
