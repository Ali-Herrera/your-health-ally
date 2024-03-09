import Image from "next/image";
import {
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  Space,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { UserButton, SignedIn } from "@clerk/nextjs";
import { IconPlus, IconSend } from "@tabler/icons-react";
import { theme } from "../../components/config/theme";
import PinkLogo from "../../public/logo/logo-pink-dark.png";

export function Chat() {
  const [mobileOpened, { open, close }] = useDisclosure();
  const isMobile = useMediaQuery("(max-width: 750em)");

  // Deconstruct theme object
  const { colors, white, black } = theme;

  //Icons
  const iconPlus = <IconPlus size={15} />;

  return (
    <div style={{ overflowX: "hidden", color: white }}>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          color: white,
        }}
      >
        <AppShell
          header={{ height: 60 }}
          navbar={{
            width: 300,
            breakpoint: "sm",
            collapsed: { mobile: !mobileOpened },
          }}
          transitionTimingFunction="ease"
          padding="xs"
          layout="alt"
        >
          <AppShell.Header bg={white} withBorder={false}>
            <Group
              m="sm"
              justify={isMobile ? "space-between" : "flex-start"}
              style={{ alignContent: "center" }}
            >
              <Burger
                aria-label="Toggle navigation"
                opened={mobileOpened}
                onClick={open}
                hiddenFrom="sm"
                size="sm"
                m="sm"
              />
              <Image
                src={PinkLogo}
                alt="Your Health Ally Logo"
                //Original Size 1920 by 1080...Reduced to 96 by 54 (5% of original size)
                width={96}
                height={54}
              />
              <SignedIn>
                <UserButton />
              </SignedIn>
            </Group>
          </AppShell.Header>

          <AppShell.Navbar
            p="md"
            bg={colors?.darkPink?.[6]}
            style={{
              borderColor: colors?.darkPink?.[9],
            }}
          >
            {mobileOpened ? (
              <Button
                mt="xl"
                variant="white"
                color={colors?.darkPink?.[6]}
                onClick={close}
              >
                Close
              </Button>
            ) : null}
            <Button
              mt="xl"
              variant="white"
              color={colors?.darkPink?.[6]}
              leftSection={iconPlus}
              justify="center"
            >
              Start New Chat
            </Button>
          </AppShell.Navbar>

          <AppShell.Main
            bg={white}
            pb={70}
            style={{
              overflowX: "hidden",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            {/* CHAT RESPONSE */}
            <Stack className="chatLog" gap="md" style={{ padding: "20px" }}>
              <Group
                className="chatUser"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Avatar color={colors?.teal?.[6]}>AH</Avatar>
                <Text c="dimmed">User question</Text>
              </Group>
              <Group
                className="chatGPT"
                style={{
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                <Avatar color={colors?.darkPink?.[6]}>GPT</Avatar>
                <Text c={black}>AI Response</Text>
              </Group>
            </Stack>

            {/* TEXT AREA - TYPE MESSAGE */}
            <Group justify="center">
              <Textarea
                placeholder="What questions do you have?"
                aria-label="Type your message here"
                radius="md"
                style={{
                  width: "90%",
                }}
              />
              <Button
                color={colors?.darkPink?.[3]}
                size="sm"
                radius="xl"
                justify="center"
                p={0}
                aria-label="Send message"
                style={{
                  width: "5%",
                  // "&:hover": {
                  //   backgroundColor: colors?.darkPink?.[8],
                  //   color: colors?.darkPink?.[6],
                  // },
                  // "$:active": {
                  //   backgroundColor: colors?.darkPink?.[8],
                  //   color: colors?.darkPink?.[6],
                  // },
                }}
              >
                <IconSend
                  size={20}
                  style={{ bottom: "5px", alignSelf: "center" }}
                />
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
