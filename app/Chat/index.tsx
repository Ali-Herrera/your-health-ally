import Image from "next/image";
import {
  Button,
  Box,
  Group,
  Stack,
  Text,
  Title,
  AppShell,
  Burger,
  Textarea,
  Avatar,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UserButton, SignedIn } from "@clerk/nextjs";
import { theme } from "../../components/config/theme";
import LogoHeart from "../../public/icons/heart-pink-dark.png";

export function Chat() {
  const [opened, { toggle }] = useDisclosure();

  // Deconstruct theme object
  const { colors, white, black } = theme;

  return (
    <div style={{ overflowX: "hidden" }}>
      <div style={{ maxWidth: "100vw", position: "relative" }}>
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !opened },
          }}
          padding="md"
          layout="alt"
        >
          <AppShell.Header bg={white} withBorder={false}>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <Group style={{ alignContent: "center", justifyContent: "center" }}>
              <Image
                src={LogoHeart}
                alt="Your Health Ally Logo"
                width={40}
                height={40}
              />
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar p="md" bg={colors?.darkPink?.[6]} withBorder={false}>
            <Title c={white}>Your Health Ally</Title>
            <Button variant="white" color={colors?.darkPink?.[6]}>
              + New Chat
            </Button>
          </AppShell.Navbar>

          <AppShell.Main
            bg={white}
            style={{
              overflowX: "hidden",
              paddingBottom: "70px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Stack className="chatLog" gap="md" style={{ padding: "20px" }}>
              <Group
                className="chatUser"
                // bg={colors?.teal?.[2]}
                style={{
                  padding: "10px",
                }}
              >
                <Avatar>AH</Avatar>
                <Text>Ask your questions here.</Text>
              </Group>
              <Group
                className="chatGPT"
                // bg={colors?.teal?.[5]}
                style={{
                  padding: "10px",
                }}
              >
                <Avatar>GPT</Avatar>
                <Text>I am an AI</Text>
              </Group>
            </Stack>

            <Group
              style={{
                display: "flex",
                alignItems: "center",
                padding: "20px",
              }}
            >
              <Textarea
                placeholder="What questions do you have?"
                style={
                  {
                    // flex: 1,
                    // marginRight: "20px",
                    // borderRadius: "20px",
                    // boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                  }
                }
              />
              <Button
                // variant="filled"
                color={colors?.teal?.[6]}
                size="lg"
                radius="md"
                style={{
                  padding: "10px 20px",
                  height: "fit-content",
                }}
              >
                Send
              </Button>
            </Group>
          </AppShell.Main>
          <AppShell.Footer
            bg={white}
            withBorder={false}
            m="lg"
            style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text c="dimmed" m="xs" style={{ fontSize: "10px" }}>
              © YOUR HEALTH ALLY {new Date().getFullYear()}
            </Text>
            <Text c="dimmed" fs="italic" m="xs" style={{ fontSize: "10px" }}>
              This is not medical advice. This is for educational purposes only.
              Please see your healthcare provider for medical treatment.
            </Text>
          </AppShell.Footer>
        </AppShell>
      </div>
    </div>
  );
}
