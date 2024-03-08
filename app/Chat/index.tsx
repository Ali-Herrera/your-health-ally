import {
  Button,
  Group,
  Stack,
  Title,
  Text,
  AppShell,
  Burger,
  Textarea,
} from '@mantine/core';
import { useMediaQuery, useDisclosure, useInViewport } from '@mantine/hooks';
import { theme } from '../../components/config/theme';
import {
  UserButton,
  useUser,
  SignedIn,
  SignedOut,
  SignInButton,
} from '@clerk/nextjs';

export function Chat() {
  const [opened, { toggle }] = useDisclosure();
  return (
    <div style={{ overflowX: 'hidden' }}>
      <div style={{ maxWidth: '100vw', position: 'relative' }}>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: 'sm',
            collapsed: { mobile: !opened },
          }}
          padding='md'
        >
          <AppShell.Header>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom='sm'
              size='sm'
            />
            <div>Logo</div>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </AppShell.Header>

          <AppShell.Navbar p='md' bg={theme.colors.teal[7]}>
            <Text>Your Health Ally</Text>
            <Button color={theme.colors.pink[6]}>+ New Chat</Button>
          </AppShell.Navbar>

          <AppShell.Main
            bg={theme.colors.teal[1]}
            style={{ overflowX: 'hidden' }}
          >
            <Stack gap='md' style={{ padding: '20px' }}>
              <Title>Your Health Ally</Title>
              <Text>Ask your questions here.</Text>
            </Stack>

            <Group
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                padding: '20px',
              }}
            >
              <Textarea
                placeholder='What questions do you have?'
                style={{
                  flex: 1,
                  marginRight: '20px',
                  borderRadius: 10,
                  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                }}
              />
              <Button
                variant='filled'
                style={{
                  borderRadius: 10,
                  padding: '10px 20px',
                  height: 'fit-content',
                }}
              >
                Send
              </Button>
            </Group>
          </AppShell.Main>

          <AppShell.Footer
            bg={theme.colors.teal[7]}
            style={{ textAlign: 'center', padding: '20px' }}
          >
            <Text
              style={{
                fontSize: '0.8rem',
                textAlign: 'center',
              }}
            >
              © Your Health Ally. This is not medical advice. This is for
              educational purposes only. Please see your healthcare provider for
              medical treatment.
            </Text>
          </AppShell.Footer>
        </AppShell>
      </div>
    </div>
  );
}
