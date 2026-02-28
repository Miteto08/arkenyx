import Link from 'next/link';
import { get } from '@/lib/i18n';

export const metadata = {
  title: get<string>('notFound.title'),
};

export default function NotFound() {
  return (
    <div className="container" style={{ paddingTop: '4rem', paddingBottom: '4rem', minHeight: '60vh' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>{get<string>('notFound.title')}</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>
        {get<string>('notFound.description')}
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
        {get<string>('notFound.backLink')}
      </Link>
    </div>
  );
}
