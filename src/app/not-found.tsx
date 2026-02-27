import Link from 'next/link';

export const metadata = {
  title: 'Page introuvable',
};

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Page introuvable</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        La page que vous recherchez n’existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-block',
          padding: '0.75rem 1.25rem',
          background: 'var(--color-primary)',
          color: '#0f172a',
          fontWeight: 600,
          borderRadius: '0.25rem',
          textDecoration: 'none',
        }}
      >
        Retour à l’accueil
      </Link>
    </div>
  );
}
