import { DialogType } from '../models/types';

export const defaultDialogConfig = {
  actions: {
    confirm: 'Okej',
    close: 'Avbryt',
  },
};

export const pauseDialog: DialogType = {
  dialog: {
    title: 'Paus24',
    description: 'Här kan du pausa dig i 24 timmar',
    actions: { ...defaultDialogConfig.actions },
  },
};

export const confirmDialog: DialogType = {
  dialog: {
    title: 'Pausad',
    description: 'Du har pausat dig i 24 timmar',
    actions: { confirm: defaultDialogConfig.actions.confirm },
    open: false,
    onClose: (value: boolean) => {
      return value;
    },
  },
};

export const errorDialog: DialogType = {
  dialog: {
    title: 'Fel',
    description: 'Något gick fel',
    actions: { confirm: defaultDialogConfig.actions.confirm },
    open: false,
    onClose: (value: boolean) => {
      return value;
    },
  },
};
