'use client';

import React from 'react';

type Props = {
  pauseEndDate: string;
};

export const ActivePause = ({ pauseEndDate }: Props) => {
  return (
    <section>
      <h2 className='font-bold'>Dina aktiva pauser</h2>
      <ul>
        <li>
          <span>Paus 24 timmar, upphör: {pauseEndDate}</span>
        </li>
      </ul>
    </section>
  );
};
