import { Title, Text } from "@mantine/core";
import classes from "./Welcome.module.css";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta='center' mt={100}>
        Welcome to{" "}
        <Text
          inherit
          variant='gradient'
          component='span'
          gradient={{ from: "pink ", to: "yellow" }}
        >
          Your Health Ally
        </Text>
      </Title>
      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        Your Voice Matters, Your Health Matters.
      </Text>
      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        At Your Health Ally, we are here to empower you to take control of your
        health. Your concerns are <b>valid</b>, and your voice should be{" "}
        <b>heard</b>.
      </Text>
      <Text c='dimmed' ta='center' size='lg' maw={580} mx='auto' mt='xl'>
        We provide the resources and support you need to navigate your health
        with confidence.
      </Text>
    </>
  );
}
