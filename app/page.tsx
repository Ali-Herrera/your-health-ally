import { UserButton } from "@clerk/nextjs";
import { Group } from "@mantine/core";
import { Welcome } from "../components/Welcome/Welcome";
import { ColorSchemeToggle } from "../components/ColorSchemeToggle/ColorSchemeToggle";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Health Ally - Welcome",
};

export default function HomePage() {
  return (
    <>
      <Welcome />
      <ColorSchemeToggle />
      <Group className='h-screen'>
        <UserButton afterSignOutUrl='/' />
      </Group>
    </>
  );
}
