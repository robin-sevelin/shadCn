'use client';

import { useState } from 'react';
import {
  pauseDialog,
  confirmDialog,
  errorDialog,
} from '../lib/constants/dialogs';
import DialogManager from './DialogManager';

type Props = {
  isPause24Open: boolean;
  setIsPause24Open: (value: boolean) => void;
};

const Pause24 = ({ isPause24Open, setIsPause24Open }: Props) => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handlePause24Close = (confirm: boolean) => {
    // handle some sort of API req, if error set error to true
    if (confirm) {
      setIsConfirmationOpen(true);
    }
    setIsPause24Open(false);
  };

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false);
  };

  const handleErrorClose = () => {
    setHasError(false);
  };

  return (
    <>
      {hasError && (
        <DialogManager
          dialog={{
            ...errorDialog.dialog,
            open: hasError,
            onClose: handleErrorClose,
          }}
        />
      )}
      <DialogManager
        dialog={{
          ...pauseDialog.dialog,
          open: isPause24Open,
          onClose: handlePause24Close,
        }}
      />
      <DialogManager
        dialog={{
          ...confirmDialog.dialog,
          open: isConfirmationOpen,
          onClose: handleConfirmationClose,
        }}
      />
    </>
  );
};

export default Pause24;
