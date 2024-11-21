'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import ButtonImage from './Avatar';

interface Props {
  buttonText?: string;
  onConfirm: () => void;
}

const PauseDialog = ({ onConfirm, buttonText }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant='outline'
          className='flex items-center justify-center p-2'
        >
          {buttonText && buttonText.trim() !== '' ? (
            buttonText
          ) : (
            <ButtonImage />
          )}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Paus24</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        Här kan du pausa dig i 24 timmar
        <DialogFooter>
          <DialogClose asChild>
            <Button variant='secondary'>Avbryt</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant='default' onClick={onConfirm}>
              Pausa mig
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PauseDialog;
