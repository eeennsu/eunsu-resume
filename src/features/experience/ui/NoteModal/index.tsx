import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shared/shadcn-ui/ui/dialog';
import type { FC, PropsWithChildren } from 'react';

type Props = {
  description?: string;
  reasonForLeaving?: string;
};

const NoteModal: FC<PropsWithChildren<Props>> = ({ description, reasonForLeaving, children }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className='gap-0 rounded-lg bg-white p-6 shadow-lg'>
        <DialogHeader className='mb-4'>
          <DialogTitle className='text-xl font-bold text-gray-800'>Note</DialogTitle>
        </DialogHeader>
        {reasonForLeaving && (
          <div className='flex flex-col gap-2'>
            <p className='text-gray-800'>{reasonForLeaving}</p>
          </div>
        )}
        {description && (
          <div className='flex flex-col gap-2'>
            <p className='text-gray-800'>{description}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default NoteModal;
