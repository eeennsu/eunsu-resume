import { FC } from 'react'

interface Props {
    name: string
    detailList: string[]
}

export const SkillCard: FC<Props> = ({ name, detailList }) => {
    return (
        <div className='grid grid-cols-12 gap-2'>
            <h3 className='col-span-3 font-medium text-gray-600 text-xl'>{name}</h3>
            <ul className='w-full col-span-9 list-disc list-inside '>
                {detailList.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}
