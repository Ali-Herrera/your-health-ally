import Link from "next/link";
import {
  BackgroundImage,
  Box,
  Button,
  Overlay,
  Title,
  Text,
  Group,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../config/theme";
// import WelcomeImg from '../../public/images/unsplashphoto-welcome.jpg';
// image org size = 6000x4000

export function Welcome() {
  // const mobileScreen = useMediaQuery('(max-width: 482px)');
  const { colors, white } = theme;

  return (
    <Box style={{ height: "100vh" }}>
      <BackgroundImage
        src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // radius='sm'
        style={{ height: "100%", width: "100%" }}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Box
          p="calc(var(--mantine-spacing-xl) * 6)"
          ta="start"
          pos="relative"
          lh={1.5}
          style={{
            height: "rem(700px)",
            display: "flex",
            flexDirection: "column",
            zIndex: "1",
          }}
        >
          <Group>
            <Title order={2} size="h1" c={white}>
              Welcome to{" "}
            </Title>
            <Title order={1} c={white}>
              Your Health Ally
            </Title>
          </Group>
          <Title order={2} c={white}>
            Your Voice Matters. Your Health Matters.
          </Title>

          <Text c={white} size="lg" maw={580}>
            At Your Health Ally, we are here to empower you to take control of
            your health. Your concerns are valid, and your voice should be
            heard.
          </Text>
          <Text c={white} size="lg" maw={580}>
            We provide the resources and support you need to navigate your
            health with confidence.
          </Text>

          <Link href="/sign-in">
            <Button
              mt="lg"
              variant="white"
              color={colors?.teal?.[6]}
              size="lg"
              radius="lg"
            >
              Get Started
            </Button>
          </Link>
        </Box>
      </BackgroundImage>
    </Box>
  );
}
