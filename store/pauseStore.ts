import { create } from 'zustand';
import { formattedDate } from '@/lib/utils';

type PauseStore = {
  hasPause: boolean;
  pauseEndDate: string;
  setPause: () => void;
};

export const pauseStore = create<PauseStore>()((set) => ({
  hasPause: false,
  pauseEndDate: '',
  setPause: () =>
    set(() => ({
      hasPause: true,
      pauseEndDate: formattedDate,
    })),
}));
