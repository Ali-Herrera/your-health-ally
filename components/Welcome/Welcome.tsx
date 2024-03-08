"use client";
import Link from "next/link";
import Image from "next/image";
import {
  BackgroundImage,
  Box,
  Button,
  Container,
  Overlay,
  Stack,
  Title,
  Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { theme } from "../config/theme";
// import WelcomeImg from "../../public/images/unsplashphoto-welcome.jpg";
// image org size = 6000x4000

export function Welcome() {
  // const mobileScreen = useMediaQuery("(max-width: 482px)");

  return (
    <Box style={{ height: "100vh" }}>
      <BackgroundImage
        src="https://images.unsplash.com/photo-1593526613712-7b4b9a707330?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        // radius="sm"
        style={{ height: "100%", width: "100%" }}
      >
        <Overlay
          gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 40%)"
          opacity={1}
          zIndex={0}
        />
        <Container size="md">
          <Title>A fully featured React components library</Title>
          <Text size="xl" mt="xl">
            Build fully functional accessible web applications faster than ever
            – Mantine includes more than 120 customizable components and hooks
            to cover you in any situation
          </Text>

          <Button variant="gradient" size="xl" radius="xl">
            Get started
          </Button>
        </Container>
      </BackgroundImage>
    </Box>
  );
}

{
  /* <Stack align="center" justify="center" gap={mobileScreen ? "md" : "lg"}>
<Title ta="center" fw={700} c={theme.black} order={1}>
  Welcome to{" "}
  <Text
    inherit
    variant="gradient"
    component="span"
    gradient={{
      from: `${theme.colors.darkPink[6]}`,
      to: `${theme.colors.pink[6]}`,
    }}
  >
    Your Health Ally
  </Text>
</Title>
<Title ta="center" mx="auto" order={2} c={theme.colors.pink[6]}>
  Your Voice Matters. Your Health Matters.
</Title>
<Text c="black" ta="center" size="lg" maw={580}>
  At Your Health Ally, we are here to empower you to take control of
  your health. Your concerns are <b>valid</b>, and your voice should be{" "}
  <b>heard</b>.
</Text>
<Text c="black" ta="center" size="lg" maw={580}>
  We provide the resources and support you need to navigate your health
  with confidence.
</Text>
<Group w="33%" justify="center">
  <Link href="/sign-in">
    <Button fullWidth variant="filled" color="#025043">
      Get Started
    </Button>
  </Link>
</Group>
</Stack> */
}
