import type { FC } from 'react';

interface IProps {
  text: string;
}

const TextDivider: FC<IProps> = ({ text }) => {
  return (
    <div className='my-14 flex items-center gap-4'>
      <div className='grow border-t border-gray-300' />
      <span className='text-sm whitespace-nowrap text-gray-400'>{text}</span>
      <div className='grow border-t border-gray-300' />
    </div>
  );
};

export default TextDivider;
