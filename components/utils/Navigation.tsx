import Link from 'next/link';
import React from 'react';

const Navigation = () => {
  return (
    <nav>
      <ul className='flex gap-2'>
        <li>
          <Link href={'/'}>Hem</Link>
        </li>
        <li>
          <Link href={'/spelpaus'}>Spelpaus</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
