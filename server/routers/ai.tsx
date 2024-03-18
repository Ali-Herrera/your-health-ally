import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const aiRouter = createTRPCRouter({
	generateText: publicProcedure
		.input(z.object({ prompt: z.string() }))
		.mutation(async ({ input }) => {
			const { prompt } = input;

			return {
				generatedText: `You said: '${prompt}'`,
			};
		}),
});

// Exporting just the type data to prevent bundling
// server-side code into the client.
export type aiRouterType = typeof aiRouter;
