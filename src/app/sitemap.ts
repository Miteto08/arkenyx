import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.arkenyx.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/avis/',
    '/mentions-legales/',
    '/politique-confidentialite/',
    '/cgu/',
    '/cgv/',
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' || path === '/avis/' ? 'weekly' : ('monthly' as const),
    priority: path === '' ? 1 : path === '/avis/' ? 0.9 : 0.7,
  }));
}
