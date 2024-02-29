'use client';

import { usePathname } from 'next/navigation';

export function CurrentRoute({ slice = 2 }) {
  const pathname = usePathname();

  return <>{pathname?.split('/').slice(slice).join('/')}</>;
}
