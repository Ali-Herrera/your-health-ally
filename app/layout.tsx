import { ClerkProvider } from '@clerk/nextjs';
import { withTRPC } from '@trpc/next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import React from 'react';
import { theme } from '../theme';
import { api } from '../utils/api';

export const metadata = {
  title: 'Your Health Ally',
  description:
    'Your Health Ally is here to empower you to take control of your health. Your concerns are valid, and your voice should be heard. We provide the resources and support you need to navigate your health with confidence.',
};

function RootLayout({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <head>
          <ColorSchemeScript />
          <link rel='shortcut icon' href='/favicon.svg' />
          <meta
            name='viewport'
            content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
          />
        </head>
        <body>
          <MantineProvider theme={theme}>
            <Component {...pageProps} />
          </MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

export default api.withTRPC(RootLayout);
