import { FC } from 'react';

interface Props {
  name: string;
  detailList: string[];
}

const SkillCard: FC<Props> = ({ name, detailList }) => {
  return (
    <div className='grid grid-cols-7 gap-x-14 border-b border-b-gray-200 py-3'>
      <h3 className='col-span-2 text-lg text-gray-900 md:col-span-2 md:text-xl'>{name}</h3>
      <ul className='col-span-5 grid grid-cols-2 md:col-span-5 md:grid-cols-3'>
        {detailList.map((detail, index) => (
          <li key={index} className='flex w-full items-center gap-1.5 font-semibold'>
            <span className='text-lg leading-none'>-</span> {detail}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
