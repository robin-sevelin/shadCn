'use client';

import { useState } from 'react';
import ConfirmDialog from './ConfirmDialog';
import PauseDialog from './PauseDialog';

const Pause24 = () => {
  const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);

  const handlePauseConfirm = () => {
    setIsConfirmationOpen(true);
  };

  const handleConfirmationClose = () => {
    setIsConfirmationOpen(false);
  };

  return (
    <>
      <PauseDialog onConfirm={handlePauseConfirm} />
      <ConfirmDialog
        open={isConfirmationOpen}
        onClose={handleConfirmationClose}
      />
    </>
  );
};

export default Pause24;
