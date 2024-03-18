import { createTRPCReact } from '@trpc/react-query';
import type { aiRouterType } from '../server/api/routers/ai';
 
export const trpc = createTRPCReact<aiRouterType>();
