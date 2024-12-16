import { clsx, type ClassValue } from 'clsx';
import { add, format } from 'date-fns';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const in24Hrs = add(new Date(), {
  hours: 24,
});

export const formattedDate = format(in24Hrs, 'MM/dd/yyyy HH:mm');
