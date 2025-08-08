'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export function ScrollToTopOnPageChange() {
  const searchParams = useSearchParams();
  const page = searchParams.get('page');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  return null;
}
