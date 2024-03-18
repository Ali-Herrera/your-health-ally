import { createTRPCReact } from "@trpc/react-query";
import type { aiRouterType } from "../server/routers/ai";

export const trpc = createTRPCReact<aiRouterType>();

// Alex's solution ... use react-query to create a hook for the trpc client