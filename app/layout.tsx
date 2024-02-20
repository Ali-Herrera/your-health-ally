import { ClerkProvider } from '@clerk/nextjs';

import '@mantine/core/styles.css';
import React from 'react';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Your Health Ally',
  description:
    'Your Health Ally is here to empower you to take control of your health. Your concerns are valid, and your voice should be heard. We provide the resources and support you need to navigate your health with confidence.'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <ColorSchemeScript />
          <link rel="shortcut icon" href="/favicon.svg" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
          />
        </head>
        <body>
          <MantineProvider theme={theme}>{children}</MantineProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
