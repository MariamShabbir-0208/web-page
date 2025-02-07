'use client';

import { SessionProvider } from 'next-auth/react';
import ShopContextProvider from '@/context/shopcontext';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ShopContextProvider>
        {children}
      </ShopContextProvider>
    </SessionProvider>
  );
}
