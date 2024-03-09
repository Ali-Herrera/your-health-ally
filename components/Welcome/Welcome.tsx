import Link from "next/link";
import {
  BackgroundImage,
  Box,
  Button,
  Overlay,
  Title,
  Text,
} from "@mantine/core";
// import { useMediaQuery } from '@mantine/hooks';
import { theme } from "../config/theme";
// import WelcomeImg from '../../public/images/unsplashphoto-welcome.jpg';
// image org size = 6000x4000

export function Welcome() {
  // const mobileScreen = useMediaQuery('(max-width: 482px)');

  // Deconstruct theme object
  const { colors, white, black } = theme;

  return (
    <Box
      style={{
        height: "100vh",
        display: "flex",
        alignContent: "center",
        // justifyContent: "center",
      }}
    >
      <BackgroundImage
        src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // radius='sm'
        style={{ height: "100%", width: "100%" }}
      >
        <Overlay color={white} opacity={1} zIndex={0} />
        <Box
          p="xl"
          pos="relative"
          lh={1.5}
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "column",
            zIndex: "1",
          }}
        >
          {/* TODO: Add a logo and remove title */}
          <Title
            mb="md"
            order={1}
            style={{ fontSize: "10vh", ".root--title-fw": "bolder" }}
          >
            YOUR HEALTH ALLY
          </Title>
          <br />
          <Title order={2} size="h3" c={black} mb="lg">
            Your Voice Matters. Your Health Matters.
          </Title>
          <br />
          <Text c={black} size="xl" fw={500}>
            At Your Health Ally, we are here to empower you to take control of
            your health. Your concerns are valid, and your voice should be
            heard.
          </Text>
          <br />
          <Text c={black} size="xl" fw={500}>
            We provide the resources and support you need to navigate your
            health with confidence.
          </Text>
          <br />
          <Box>
            <Link href="/sign-in">
              <Button
                mt="lg"
                variant="filled"
                color={colors?.teal?.[6]}
                size="lg"
                radius="lg"
              >
                Get Started
              </Button>
            </Link>
          </Box>
          <Box pos="fixed" style={{ bottom: "20px" }}>
            <Text c={black} m="xs" style={{ fontSize: "10px" }}>
              © YOUR HEALTH ALLY {new Date().getFullYear()}
            </Text>
            <Text c={black} fs="italic" m="xs" style={{ fontSize: "10px" }}>
              This is not medical advice. This is for educational purposes only.
              Please see your healthcare provider for medical treatment.
            </Text>
          </Box>
        </Box>
      </BackgroundImage>
    </Box>
  );
}
