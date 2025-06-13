import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@shared/shadcn-ui/ui/dialog';
import type { FC, PropsWithChildren } from 'react';

import { ICompanyExperience } from '@entities/experience/types';

type Props = {
  note: ICompanyExperience['note'];
};

const CompanyNoteModal: FC<PropsWithChildren<Props>> = ({ children, note }) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className='rounded-lg bg-white p-6 shadow-lg'>
        <DialogHeader className='mb-4'>
          <DialogTitle className='text-xl font-bold text-gray-800'>Note</DialogTitle>
        </DialogHeader>
        {note?.reasonForLeaving && (
          <div className='flex flex-col gap-2'>
            <h3 className='text-lg font-semibold text-gray-700'>퇴사 사유</h3>
            <p className='text-gray-800'>{note.reasonForLeaving}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CompanyNoteModal;
