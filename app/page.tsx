'use client';

import { UserButton, useUser } from '@clerk/nextjs';
import { Group } from '@mantine/core';
import { Welcome } from '../components/Welcome/Welcome';
import { Chat } from './Chat';
// import { Metadata } from 'next';

export default function HomePage() {
  const { isLoaded, user } = useUser();

  return (
    <>
      {/* If the user is not signed in, show the welcome page */}
      {isLoaded && !user && (
        <>
          <Welcome />
          <Group className='h-screen'>
            <UserButton afterSignOutUrl='/' />
          </Group>
        </>
      )}{' '}
      {isLoaded && user && (
        <>
          <Chat />
          <Group className='h-screen'>
            <UserButton afterSignOutUrl='/' />
          </Group>
        </>
      )}
    </>
  );
}
