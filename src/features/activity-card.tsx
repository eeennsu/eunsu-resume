import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/lib/ui/accordion'
import { getEstimatedDuration } from '@/lib/utils'
import { Badge } from '@/shared/common'
import ReactMarkdown from 'react-markdown'
import { FC } from 'react'

type Props = ExperienceType['activities'][number]

export const ActivityCard: FC<Props> = ({ title, startDate, endDate, doneList }) => {
    return (
        <div className='flex flex-col gap-3.5 last:border-none border-b border-gray-400 pb-8'>
            <div className='flex gap-4 max-md:flex-col md:justify-between'>
                <h4 className='font-bold text-xl md:text-2xl'>{title}</h4>
                <div className='flex items-center gap-3 max-md:hidden'>
                    <p className='text-sm text-gray-600'>
                        {startDate} ~ {endDate || '현재'}
                    </p>
                    {endDate && <Badge variant='secondary'>{`${getEstimatedDuration(startDate, endDate)} 개월`}</Badge>}
                </div>
            </div>
            <ol className='list-decimal list-inside flex flex-col gap-6 md:gap-8 ml-2'>
                {doneList.map((done, i) => (
                    <li
                        key={i}
                        className='custom-decimal-list'
                    >
                        <span className='text-base md:text-lg font-semibold'>{done.subject}</span>

                        {done.details && (
                            <ul className='list-disc list-outside ml-4 text-sm'>
                                {done.details.map((detail, j) => {
                                    if (typeof detail === 'string') {
                                        return (
                                            <li
                                                key={`${i}-${j}`}
                                                className=' text-gray-800 ml-6'
                                            >
                                                <ReactMarkdown>{detail}</ReactMarkdown>
                                            </li>
                                        )
                                    }

                                    return (
                                        <li
                                            key={`${i}-${j}`}
                                            className='list-none mb-5 last:mb-0 font-medium flex flex-col gap-0.5'
                                        >
                                            <ReactMarkdown className='marker-problem flex text-orange-600 gap-0.5'>
                                                {detail.problem}
                                            </ReactMarkdown>
                                            <ReactMarkdown className='marker-solution flex text-green-600 gap-0.5 font-medium'>
                                                {detail.solution}
                                            </ReactMarkdown>
                                        </li>
                                    )
                                })}
                            </ul>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    )
}

// TODO: 추후 컨텐츠가 많아지면 아코디언 사용
const ActivityDetailAccordion: FC<{ trigger: string; content: string }> = ({ trigger, content }) => {
    return (
        <Accordion type='multiple'>
            <AccordionItem value={trigger}>
                <AccordionTrigger>{trigger}</AccordionTrigger>
                <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
