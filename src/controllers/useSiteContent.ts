import { get } from '@/lib/i18n';

export function useSiteContent() {
  return {
    siteName: get<string>('site.name'),
    tagline: get<string>('site.tagline'),
  };
}
