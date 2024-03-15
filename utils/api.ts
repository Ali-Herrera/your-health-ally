/**
 * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which
 * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.
 *
 * We also create a few inference helpers for input and output types.
 */
import { httpBatchLink, loggerLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { NextPageContext } from 'next';

import { transformer } from './transformer';
import { AppRouter } from '@/app/api/chat/root';

function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '';
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.RENDER_INTERNAL_HOSTNAME) {
    return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
  }
  return `http://127.0.0.1:${process.env.PORT ?? 3000}`;
}

export interface SSRContext extends NextPageContext {
  status?: number;
}

export const api = createTRPCNext<AppRouter, SSRContext>({
  config({ ctx }) {
    return {
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === 'development' ||
            (opts.direction === 'down' && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
          headers() {
            if (!ctx?.req?.headers) {
              return {};
            }
            const { connection: _connection, ...headers } = ctx.req.headers;
            return headers;
          },
          transformer,
        }),
      ],
    };
  },
  ssr: false,
  transformer,
});

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
