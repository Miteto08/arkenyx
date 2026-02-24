import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import '@/app/globals.scss';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});

export const metadata: Metadata = {
  title: 'Arkenyx – Stockage PC & Montage',
  description: 'Votre micro-entreprise spécialisée stockage informatique et montage PC.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={dmSans.variable}>
      <body>{children}</body>
    </html>
  );
}
