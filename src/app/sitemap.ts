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

  return routes.map((path) => {
    const isHome = path === '';
    const isAvis = path === '/avis/';
    return {
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
      changeFrequency: isHome || isAvis ? 'weekly' : ('monthly' as const),
      priority: isHome ? 1 : isAvis ? 0.9 : 0.7,
    };
  });
}
