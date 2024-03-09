import Image from "next/image";
import {
  Button,
  Group,
  Stack,
  Text,
  AppShell,
  Burger,
  Textarea,
  Avatar,
  Space,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { UserButton, SignedIn } from "@clerk/nextjs";
import { IconPlus } from "@tabler/icons-react";

import { theme } from "../../components/config/theme";
import PinkLogo from "../../public/logo/logo-pink-dark.png";

export function Chat() {
  const [opened, { toggle }] = useDisclosure();

  // Deconstruct theme object
  const { colors, white } = theme;

  //Icon
  const iconPlus = <IconPlus size={20} />;

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
            <Group
              m="sm"
              style={{ alignContent: "center", justifyContent: "flex-end" }}
            >
              <Space w="sm" />
              <SignedIn>
                <UserButton />
              </SignedIn>
              <Space w="sm" />
              <Image
                src={PinkLogo}
                alt="Your Health Ally Logo"
                // 1920 by 1080
                width={96}
                height={54}
              />
              <Space w="sm" />
            </Group>
          </AppShell.Header>

          <AppShell.Navbar p="md" bg={white} withBorder={false}>
            <Button
              mt="xl"
              color={colors?.darkPink?.[6]}
              leftSection={iconPlus}
              justify="center"
            >
              New Chat
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
