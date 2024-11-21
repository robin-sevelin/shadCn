import { Avatar, AvatarImage } from '@/components/ui/avatar';
import React from 'react';

const ButtonImage = () => {
  return (
    <Avatar className='w-8 h-8'>
      <AvatarImage
        className='rounded-full'
        src='https://github.com/shadcn.png'
        alt='@shadcn'
      />
    </Avatar>
  );
};

export default ButtonImage;
