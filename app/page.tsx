'use client';

import React, { useState } from 'react';

import { UserButton, useUser } from '@clerk/nextjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { Group } from '@mantine/core';

import { Welcome } from '../components/Welcome/Welcome';
import { Chat } from './chat';
import { trpc } from '@/utils/trpc';

export default function HomePage() {
  const { isLoaded, user } = useUser();
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              authorization: getAuthCookie(),
            };
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
      {/* If the user is not signed in, show the welcome page */}
      {isLoaded && !user && (
        <>
          <Welcome />
          <Group className='h-screen'>
            <UserButton afterSignOutUrl='/' />
          </Group>
        </>
      )}{' '}
      {/* If the user is not signed in, show the welcome page */}
      {isLoaded && user && (
        <>
          <Chat />
          <Group className='h-screen'>
            <UserButton afterSignOutUrl='/' />
          </Group>
        </>
      )}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
