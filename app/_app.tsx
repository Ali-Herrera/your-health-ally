import { api } from '@/utils/api';
import type { NextPage } from 'next';
import type { AppType, AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import RootLayout from '@/app/layout';

import '~/styles/globals.css';

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps,
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = (({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout =
    Component.getLayout ?? ((page) => <RootLayout>{page}</RootLayout>);

  return getLayout(<Component {...pageProps} />);
}) as AppType;

export default api.withTRPC(MyApp);
