import { Button } from '@/components/ui/button';
import { DialogHeader, DialogFooter } from '@/components/ui/dialog';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import React from 'react';
import { DialogType } from '../lib/models/types';

const DialogManager = ({ dialog }: DialogType) => {
  const { open, title, description, onClose, actions } = dialog;

  const handleClose = () => {
    onClose?.(false);
  };

  const handleSubmit = () => {
    onClose?.(true);
  };

  return (
    <Dialog open={open}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {actions.close && (
            <Button variant='secondary' onClick={handleClose}>
              {actions.close}
            </Button>
          )}
          <Button variant='default' onClick={handleSubmit}>
            {actions.confirm}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogManager;
