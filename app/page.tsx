"use client";

import React, { useState } from "react";

import { UserButton, useUser } from "@clerk/nextjs";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { Group } from "@mantine/core";

import { Welcome } from "../components/Welcome/Welcome";
import { Chat } from "./Chat/index";
import { api } from "../utils/api";
import { transformer } from "../utils/transformer";

export default function HomePage() {
	const { isLoaded, user } = useUser();

	const [queryClient] = useState(() => new QueryClient());

	const [trpcClient] = useState(() =>
		trpc.createClient({
			links: [
				httpBatchLink({
					// TODO: replace URL
					url: "http://localhost:3000/trpc",
					// You can pass any HTTP headers you wish here
					async headers() {
						return {
							authorization: user?.id ? `Bearer ${user.id}` : "User is not signed in",
						};
					},
					transformer: transformer,
				}),
			],
		})
	);

	return (
		<trpc.Provider client={trpcClient} queryClient={queryClient}>
			<QueryClientProvider client={queryClient}>
				{/* If the user is not signed in, show the welcome page */}
				{isLoaded && !user && (
					<>
						<Welcome />
						<Group className="h-screen">
							<UserButton afterSignOutUrl="/" />
						</Group>
					</>
				)}{" "}
				{/* If the user is not signed in, show the welcome page */}
				{isLoaded && user && (
					<>
						<Chat />
						<Group className="h-screen">
							<UserButton afterSignOutUrl="/" />
						</Group>
					</>
				)}
			</QueryClientProvider>
		</trpc.Provider>
	);
}
