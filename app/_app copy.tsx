import { api } from "@/utils/api";
import type { NextPage } from "next";
import type { AppType, AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import RootLayout from "@/app/layout";
import { QueryClient, QueryClientProvider } from "react-query";
import { withTRPC } from "@trpc/next";
import { AppRouter } from "../utils/api"; // replace with your actual tRPC router

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

// Create a client
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
	config({ ctx }) {
		// ctx includes `req`, `res`, etc
		const url = process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}/api/trpc`
			: "http://localhost:3000/api/trpc";

		return {
			url,
			// for serverside rendering
			ssr: Boolean(ctx.req),
		};
	},
	transformer: superjson,
	onError({ error }) {
		if (process.browser) {
			// optionally - send errors to a logging service or similar
		}
	},
})(MyApp);
