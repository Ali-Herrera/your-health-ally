import { createTRPCRouter } from "../trpc";
import { aiRouter } from "../routers/ai";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
	ai: aiRouter,
	// `createContext: () => ({}),` not necessary since we're not using SSR
});

// export type definition of API
export type AppRouter = typeof appRouter;
