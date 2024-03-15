import { AppProps, AppType } from "next/app";
import { withTRPC } from "@trpc/next";
import { api } from "../utils/api"; // import your api and AppRouter from your api.ts file
import { AppRouter } from "../app/server/api/root"; // replace with your actual tRPC router
import { QueryClient, QueryClientProvider } from "react-query";
import RootLayout from "@/app/layout";
import { NextPage, NextPageContext } from "next";
import { ReactElement, ReactNode } from "react";
import { transformer } from "../utils/transformer";
import { parse } from "url";
import { parse as parseQuery } from "querystring";

import "~/styles/globals.css";

export type NextPageWithLayout<
	TProps = Record<string, unknown>,
	TInitialProps = TProps,
> = NextPage<TProps, TInitialProps> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout =
		Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);

	return (
		<QueryClientProvider client={queryClient}>
			{getLayout(<Component {...pageProps} />)}
		</QueryClientProvider>
	);
}) as AppType;

export default withTRPC<AppRouter>({
  // ctx includes `req`, `res`, etc
  config: ({ctx}) => ({}),
// const url= process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}/api/trpc`
// : "http://localhost:3000/api/trpc",


//    return {
//     url: url
      
//     ssr: Boolean(ctx.req), // for serverside rendering
//     pathname: ctx?.pathname,;
//     query: ParsedUrlQuery;
//     err: (Error & { statusCode?: number }) | null;}
//   }),
  transformer: transformer,
  // onError: (Error) => {
  //   console.error(err);
  // },
})(MyApp);
