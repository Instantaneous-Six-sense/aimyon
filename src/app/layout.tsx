import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { clsx } from 'clsx/lite';
import { IBM_Plex_Mono, Roboto } from 'next/font/google';
import { Metadata } from 'next';
import {
  BASE_URL,
  SITE_DESCRIPTION,
  SITE_DOMAIN,
  SITE_TITLE,
} from '@/site/config';
import StateProvider from '@/state/AppStateProvider';
import ThemeProviderClient from '@/site/ThemeProviderClient';
import Nav from '@/site/Nav';
import ToasterWithThemes from '@/toast/ToasterWithThemes';
import PhotoEscapeHandler from '@/photo/PhotoEscapeHandler';
import Footer from '@/site/Footer';
import { Suspense } from 'react';
import FooterClient from '@/site/FooterClient';
import NavClient from '@/site/NavClient';
import localFont from 'next/font/local';

import '../site/globals.css';

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-ibm-plex-mono',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-roboto',
});
const glacial = localFont({
  src: [
    {
      path: '../../public/font/glacialindifference-bold-webfont.woff2',
    },
  ],
  variable: '--font-glacial',
});
const yakuhan = localFont({
  src: [
    {
      weight: '400',
      path: '../../public/font/YakuHanJP-Regular.woff2',
    },
    {
      weight: '700',
      path: '../../public/font/YakuHanJP-Bold.woff2',
    },
    {
      weight: '900',
      path: '../../public/font/YakuHanJP-Black.woff2',
    },
  ],
  variable: '--font-yakuhan',
});

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  ...BASE_URL && { metadataBase: new URL(BASE_URL) },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_DOMAIN,
    siteName: SITE_TITLE,
    locale: 'ja_JP',
    alternateLocale: ['en_US', 'ko_KR'],
    type: 'website',
  },
  twitter: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  icons: [{
    url: '/favicon.ico',
    rel: 'icon',
    type: 'image/png',
    sizes: '180x180',
  }, {
    url: '/favicons/light.png',
    rel: 'icon',
    media: '(prefers-color-scheme: light)',
    type: 'image/png',
    sizes: '32x32',
  }, {
    url: '/favicons/dark.png',
    rel: 'icon',
    media: '(prefers-color-scheme: dark)',
    type: 'image/png',
    sizes: '32x32',
  }, {
    url: '/favicons/apple-touch-icon.png',
    rel: 'icon',
    type: 'image/png',
    sizes: '180x180',
  }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      // Suppress hydration errors due to
      // next-themes behavior
      suppressHydrationWarning
    >
      <body className={clsx(
        ibmPlexMono.variable,
        roboto.variable,
        glacial.variable,
        yakuhan.variable
      )}>
        <StateProvider>
          <ThemeProviderClient>
            <main className={clsx(
              'mx-3 mb-3',
              'lg:mx-6 lg:mb-6',
            )}>
              <Suspense fallback={<NavClient />}>
                {/* @ts-ignore */}
                <Nav />
              </Suspense>
              <div className={clsx(
                'min-h-[16rem] sm:min-h-[30rem]',
                'mb-12',
              )}>
                {children}
              </div>
              <Suspense fallback={<FooterClient />}>
                {/* @ts-ignore */}
                <Footer />
              </Suspense>
            </main>
          </ThemeProviderClient>
        </StateProvider>
        <Analytics />
        <SpeedInsights />
        <PhotoEscapeHandler />
        <ToasterWithThemes />
      </body>
    </html>
  );
}