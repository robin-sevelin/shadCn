export type DialogType = {
  dialog: {
    title: string;
    description: string;
    actions: {
      confirm: string;
      close?: string;
    };
    open?: boolean;
    onClose?: (value: boolean) => void;
  };
};
