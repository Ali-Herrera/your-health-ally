import { createTRPCReact } from '@trpc/react-query';
import type { aiRouterType } from '../app/server/api/routers/ai';
 
export const trpc = createTRPCReact<aiRouterType>();