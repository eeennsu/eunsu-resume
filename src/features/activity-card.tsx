import { Badge } from '@/shared/ui'
import { FC } from 'react'

interface Props {
    title: string
    startDate: string
    endDate?: string
    estimatedDuration?: number
    description: string
    doneList: string[]
}

export const ActivityCard: FC<Props> = ({ title, startDate, endDate, estimatedDuration, description, doneList }) => {
    return (
        <div className='flex flex-col gap-3.5 last:border-none border-b border-slate-300 pb-8'>
            <div className='flex flex-col gap-0.5'>
                <div className='flex gap-3 max-md:flex-col md:justify-between'>
                    <h4 className='font-bold text-lg'>{title}</h4>
                    <div className='flex items-center gap-2 max-md:hidden'>
                        <p className='text-sm text-gray-600'>
                            {startDate} ~ {endDate || '현재'}
                        </p>
                        {estimatedDuration && <Badge variant='secondary'>{estimatedDuration} 개월</Badge>}
                    </div>
                </div>
                <p className='text-gray-600 text-sm'>{description}</p>
            </div>
            <ul className='list-disc list-inside'>
                {doneList.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
