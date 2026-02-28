/**
 * Simple i18n: single locale (fr), key-path lookup.
 * Use get('section.subsection.key') to get a string or nested value.
 * When adding another language, add locales/en.ts and switch by locale.
 */
import fr from '@/locales/fr/index';

export const currentLocale = 'fr' as const;

function getByPath(obj: unknown, path: string): unknown {
  const keys = path.split('.');
  let current: unknown = obj;
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[key];
  }
  return current;
}

export function get<T = unknown>(path: string): T {
  const value = getByPath(fr, path);
  return value as T;
}
