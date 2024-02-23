import { Stack, Title, Text } from "@mantine/core";
import { theme } from "../config/theme";

export function Welcome() {
	return (
		<Stack sx={{ backgroundColor: theme.white }}>
			<Title ta="center" mt={100} fw={700} c={theme.black} order={1}>
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
			<Title
				ta="center"
				size="lg"
				maw={580}
				mx="auto"
				mt="xl"
				order={2}
				c={theme.colors.pink[6]}
			>
				Your Voice Matters. Your Health Matters.
			</Title>
			<Text c="black" ta="center" size="lg" maw={580} mx="auto" mt="xl">
				At Your Health Ally, we are here to empower you to take control of your
				health. Your concerns are <b>valid</b>, and your voice should be{" "}
				<b>heard</b>.
			</Text>
			<Text c="black" ta="center" size="lg" maw={580} mx="auto" mt="xl">
				We provide the resources and support you need to navigate your health
				with confidence.
			</Text>
		</Stack>
	);
}
