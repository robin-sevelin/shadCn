'use client';

import { useState } from 'react';
import Pause24 from './components/Pause24';

export default function Home() {
  const [isPause24Open, setIsPause24Open] = useState(false);
  return (
    <>
      <button onClick={() => setIsPause24Open(true)}>Paus24</button>
      <Pause24
        isPause24Open={isPause24Open}
        setIsPause24Open={setIsPause24Open}
      />
    </>
  );
}
