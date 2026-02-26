import type { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.arkenyx.fr';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/mentions-legales/',
    '/politique-confidentialite/',
    '/cgu/',
    '/cgv/',
  ];

  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === '' ? 'weekly' : ('monthly' as const),
    priority: path === '' ? 1 : 0.7,
  }));
}
