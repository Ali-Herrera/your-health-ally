/**
 * This is the client-side entrypoint for your tRPC API. It is used to create the `api` object which
 * contains the Next.js App-wrapper, as well as your type-safe React Query hooks.
 *
 * We also create a few inference helpers for input and output types.
 */
// import { httpBatchLink, loggerLink } from '@trpc/client';
// import { createTRPCNext } from '@trpc/next';

// import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
// import type { NextPageContext } from 'next';

// import { transformer } from './transformer';
// import { AppRouter } from '@/app/server/api/root';

// function getBaseUrl() {
//   if (typeof window !== 'undefined') {
//     return '';
//   }
//   if (process.env.VERCEL_URL) {
//     return `https://${process.env.VERCEL_URL}`;
//   }
//   if (process.env.RENDER_INTERNAL_HOSTNAME) {
//     return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
//   }
//   return `http://127.0.0.1:${process.env.PORT ?? 3000}`;
// }

// export interface SSRContext extends NextPageContext {
//   status?: number;
// }

// export const api = createTRPCNext<AppRouter, SSRContext>({
//   config({ ctx }) {
//     return {
//       links: [
//         loggerLink({
//           enabled: (opts) =>
//             process.env.NODE_ENV === 'development' ||
//             (opts.direction === 'down' && opts.result instanceof Error),
//         }),
//         httpBatchLink({
//           url: `${getBaseUrl()}/api/trpc`,
//           headers() {
//             if (!ctx?.req?.headers) {
//               return {};
//             }
//             const { connection: _connection, ...headers } = ctx.req.headers;
//             return headers;
//           },
//           transformer,
//         }),
//       ],
//     };
//   },
//   ssr: false,
//   transformer,
// });

// export type RouterInput = inferRouterInputs<AppRouter>;
// export type RouterOutput = inferRouterOutputs<AppRouter>;


import { httpBatchLink, loggerLink } from "@trpc/client";
import { createTRPCNext } from "@trpc/next";
import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";
import { AppRouter } from "@/app/server/api/root";
import superjson from "superjson";



const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // SSR should use vercel url
  return `http://localhost:${process.env.PORT ?? 3000}`; // dev SSR should use localhost
};

/** A set of type-safe react-query hooks for your tRPC API. */
export const api = createTRPCNext<AppRouter>({
  config() {
    return {
      /**
       * Transformer used for data de-serialization from the server.
       *
       * @see https://trpc.io/docs/data-transformers
       */
      transformer: superjson,

      /**
       * Links used to determine request flow from client to server.
       *
       * @see https://trpc.io/docs/links
       */
      links: [
        loggerLink({
          enabled: (opts) =>
            process.env.NODE_ENV === "development" ||
            (opts.direction === "down" && opts.result instanceof Error),
        }),
        httpBatchLink({
          url: `${getBaseUrl()}/api/trpc`,
        }),
      ],
    };
  },
  /**
   * Whether tRPC should await queries when server rendering pages.
   *
   * @see https://trpc.io/docs/nextjs#ssr-boolean-default-false
   */
  ssr: false,
});

/**
 * Inference helper for inputs.
 *
 * @example type HelloInput = RouterInputs['example']['hello']
 */
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helper for outputs.
 *
 * @example type HelloOutput = RouterOutputs['example']['hello']
 */
export type RouterOutputs = inferRouterOutputs<AppRouter>;