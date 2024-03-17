'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { Group } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { Chat } from './chat';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function HomePage() {
  const { isLoaded, user } = useUser();

  return (
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
  );
}

