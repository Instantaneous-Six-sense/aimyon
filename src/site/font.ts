const FONT_FAMILY_IBM_PLEX_MONO = 'IBMPlexMono';

export const getIBMPlexMonoMedium = () => fetch(new URL(
  '/public/fonts/IBMPlexMono-Medium.ttf',
  import.meta.url
))
  .then(res => res.arrayBuffer())
  .then(data => ({
    fontFamily: FONT_FAMILY_IBM_PLEX_MONO,
    fonts: [{
      name: FONT_FAMILY_IBM_PLEX_MONO,
      data,
      weight: 500,
      style: 'normal',
    } as const],
  }));

import { IBM_Plex_Mono, Roboto } from 'next/font/google';
import localFont from 'next/font/local';

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

export const fontsClass = [
  ibmPlexMono.variable,
  roboto.variable,
  glacial.variable,
  yakuhan.variable,
];