import type { Metadata } from 'next';
import Script from 'next/script';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
import { get } from '@/lib/i18n';
import '@/app/globals.scss';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.arkenyx.fr';
const siteName = get<string>('site.name');

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: get<string>('site.titleDefault'),
    template: get<string>('site.titleTemplate'),
  },
  description: get<string>('site.description'),
  keywords: get<string[]>('site.keywords'),
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName,
    title: get<string>('site.openGraph.title'),
    description: get<string>('site.openGraph.description'),
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: get<string>('site.openGraph.imageAlt'),
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: get<string>('site.twitter.title'),
    description: get<string>('site.twitter.description'),
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLdData = (() => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: siteName,
  description: get<string>('site.jsonLd.description'),
  url: siteUrl,
  email: 'contact@arkenyx.fr',
  areaServed: 'FR',
  slogan: get<string>('site.jsonLd.slogan'),
  priceRange: '€€',
  serviceType: get<string[]>('site.jsonLd.serviceType'),
}))();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="preload" href="/hero-banner.avif" as="image" />
        <Script src="/theme-init.js" strategy="beforeInteractive" />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        {children}
      </body>
    </html>
  );
}
