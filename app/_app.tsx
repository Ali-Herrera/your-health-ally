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

const AppWithTRPC = withTRPC({
  config: () => ({
    links: [
      createHttpLink({
        url: 'http://localhost:3000/api/trpc', // replace with your server URL
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



