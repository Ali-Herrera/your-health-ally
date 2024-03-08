import {
  Button,
  Group,
  Stack,
  Title,
  Text,
  AppShell,
  Burger,
  Textarea,
  Center,
  Avatar,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { theme } from '../../components/config/theme';
import { UserButton, SignedIn } from '@clerk/nextjs';

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
            style={{
              overflowX: 'hidden',
              paddingBottom: '70px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <Stack className='chatLog' gap='md' style={{ padding: '20px' }}>
              <Group
                className='chatUser'
                bg={theme.colors.teal[2]}
                style={{
                  padding: '10px',
                }}
              >
                <Avatar>AH</Avatar>
                <Text>Ask your questions here.</Text>
              </Group>
              <Group
                className='chatGPT'
                bg={theme.colors.teal[5]}
                style={{
                  padding: '10px',
                }}
              >
                <Avatar>GPT</Avatar>
                <Text>I am an AI</Text>
              </Group>
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
                  borderRadius: '20px',
                  boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)',
                }}
              />
              <Button
                variant='filled'
                color={theme.colors.pink[6]}
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
            style={{
              textAlign: 'center',
              padding: '20px',
              marginTop: 'auto', // Pushes the footer to the bottom of the container
            }}
          >
            <Text style={{ fontSize: '0.8rem', textAlign: 'right' }}>
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
