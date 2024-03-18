"use client";

import Image from "next/image";
import { AppShell, Burger, Button, Group, Text } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { UserButton, SignedIn } from "@clerk/nextjs";
import { IconPlus } from "@tabler/icons-react";
import { theme } from "../../components/config/theme";
import PinkLogo from "../../public/logo/logo-pink-dark.png";
import { api } from "@/utils/api";
import { useRef, useState } from "react";
import { ChatContent, type ChatItem } from "@/components/ChatContent";
import { ChatInput } from "@/components/ChatInput";

export const Chat = () => {
	const [chatItems, setChatItems] = useState<ChatItem[]>([]);


	const [waiting, setWaiting] = useState<boolean>(false);
	const scrollToRef = useRef<HTMLDivElement>(null);

	const scrollToBottom = () => {
		setTimeout(
			() => scrollToRef.current?.scrollIntoView({ behavior: "smooth" }),
			100
		);
	};

	const generatedTextMutation = api.ai.generateText.useMutation({
		onSuccess: (data) => {
			setChatItems([
				...chatItems,
				{
					content: data.generatedText,
					author: "AI",
				},
			]);
		},

		onError: (error) => {
			setChatItems([
				...chatItems,
				{
					content: error.message ?? "An error occurred",
					author: "AI",
					isError: true,
				},
			]);
		},

		onSettled: () => {
			setWaiting(false);
			scrollToBottom();
		},
	});

	/*
   * You can uncomment this stub to replace the actual call
   * if you get stuck and just need the page to render.

  const generatedTextMutation = {
    mutate: (opts) => { console.log(opts) }
  }

   */

	// const resetMutation = api.ai.reset.useMutation();

	const handleUpdate = (prompt: string) => {
		setChatItems([
			...chatItems,
			{
				content: prompt.replace(/\n/g, "\n\n"),
				author: "User",
			},
		]);

		generatedTextMutation.mutate({ prompt });
	};

	const [mobileOpened, { open, close }] = useDisclosure();
	const isMobile = useMediaQuery("(max-width: 750em)");

	// Deconstruct theme object
	const { colors, white, black } = theme;

	//Icons
	const iconPlus = <IconPlus size={15} />;

	// API Chat

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
						{/* CHAT CONTENT */}
						<ChatContent chatItems={chatItems} />

						{/* TEXT AREA - TYPE MESSAGE */}

						<ChatInput onUpdate={handleUpdate} />
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
};
