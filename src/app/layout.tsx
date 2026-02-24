import type { Metadata } from 'next';
import '@/app/globals.scss';

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
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
