import { UserButton } from "@clerk/nextjs";
import {Group } from '@mantine/core'
import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Group className="h-screen">
        <UserButton afterSignOutUrl="/"/>
      </Group>
    </>
  );
}
