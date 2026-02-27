import type { Metadata } from 'next';
import { DM_Sans, Space_Grotesk } from 'next/font/google';
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Arkenyx – Dépannage PC, montage et récupération de données',
    template: '%s | Arkenyx',
  },
  description:
    'Micro-entreprise informatique de proximité : dépannage et réparation PC, montage sur mesure, récupération de données, sauvegarde, conseil, installation réseau et création de sites vitrine. Réparer, expliquer, faire durer.',
  keywords: [
    'dépannage PC',
    'réparation informatique',
    'montage PC',
    'récupération données',
    'sauvegarde',
    'micro-entreprise informatique',
    'conseil informatique',
    'installation réseau',
    'site vitrine',
    'Arkenyx',
  ],
  authors: [{ name: 'Arkenyx', url: siteUrl }],
  creator: 'Arkenyx',
  publisher: 'Arkenyx',
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName: 'Arkenyx',
    title: 'Arkenyx – Dépannage PC, montage et récupération de données',
    description:
      'Micro-entreprise informatique de proximité : dépannage PC, montage, récupération de données, conseil, réseau et sites vitrine.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arkenyx – Dépannage PC, montage et récupération de données',
    description: 'Micro-entreprise informatique : dépannage, montage, récupération données, conseil, sites vitrine.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Arkenyx',
  description:
    'Micro-entreprise informatique de proximité : dépannage et réparation PC, montage sur mesure, récupération de données, conseil, installation réseau et création de sites vitrine.',
  url: siteUrl,
  email: 'contact@arkenyx.fr',
  areaServed: 'FR',
  slogan: 'Réparer, expliquer, faire durer.',
  priceRange: '€€',
  serviceType: [
    'Dépannage et réparation informatique',
    'Montage PC',
    'Récupération et sauvegarde de données',
    'Conseil et accompagnement',
    'Installation réseau',
    'Création de sites vitrine',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${dmSans.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('arkenyx-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');else document.documentElement.removeAttribute('data-theme');})();`,
          }}
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
