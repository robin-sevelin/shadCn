'use client';

import { Button } from '@/components/ui/button';
import { ActivePause } from '@/components/utils/ActivePause';

import Pause24 from '@/components/utils/Pause24';
import { pauseStore } from '@/store/pauseStore';
import { useState } from 'react';

export default function Home() {
  const { hasPause, pauseEndDate } = pauseStore();
  const [isPause24Open, setIsPause24Open] = useState(false);

  return (
    <>
      <h2>Spelpaussidan</h2>
      {hasPause && <ActivePause pauseEndDate={pauseEndDate} />}
      <Button onClick={() => setIsPause24Open(true)}>Paus24</Button>
      <Pause24
        isPause24Open={isPause24Open}
        setIsPause24Open={setIsPause24Open}
      />
    </>
  );
}
