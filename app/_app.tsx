import { withTRPC } from '@trpc/next';
import type { AppType, AppProps } from 'next/app';
import RootLayout from '@/app/layout';
import '~/styles/globals.css';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);
  return (
    <QueryClientProvider client={queryClient}>
      {getLayout(<Component {...pageProps} />)}
    </QueryClientProvider>
  );
};

function getBaseUrl() {
	if (typeof window !== "undefined") {
		return "";
	}
	// reference for vercel.com
	if (process.env.VERCEL_URL) {
		return `https://${process.env.VERCEL_URL}`;
	}

	// // reference for render.com
	if (process.env.RENDER_INTERNAL_HOSTNAME) {
		return `http://${process.env.RENDER_INTERNAL_HOSTNAME}:${process.env.PORT}`;
	}

	// assume localhost
	return `http://localhost:${process.env.PORT ?? 3000}`;
}

const AppWithTRPC = withTRPC({
  config: () => ({
    links: [
      createHttpLink({
        url: `${getBaseUrl()}/api/trpc`,
      }),
    ],
  }),
  ssr: false,
})(MyApp);

export default AppWithTRPC;

function createHttpLink(arg0: {
      url: string;
    }): import('@trpc/client').TRPCLink<import('@trpc/server').AnyRouter> {
      throw new Error('Function not implemented.');
    }