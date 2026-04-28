/**
 * Avis Google via Places API (New) — uniquement lecture, jamais écrit en base.
 * Variables : GOOGLE_PLACES_API_KEY, GOOGLE_PLACE_ID (ex. ChIJ…).
 * Optionnel : GOOGLE_REVIEWS_CACHE_HOURS (défaut 48) — délai minimum entre deux appels Google.
 * Le cache est en mémoire sur l’instance Node (pas un cron à minuit ; pas d’appel si personne ne charge les avis).
 * @see https://developers.google.com/maps/documentation/places/web-service/place-details
 */

export type PublicReviewSource = 'site' | 'google';

export type PublicReview = {
  id: string;
  source: PublicReviewSource;
  stars: number;
  services: string[];
  text: string;
  author?: string;
  created_at?: string;
};

interface PlacesReviewRaw {
  rating?: number;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: { displayName?: string; uri?: string };
  publishTime?: string;
}

function clampStarRating(n: number): number {
  if (!Number.isFinite(n)) return 5;
  const rounded = Math.round(n);
  return Math.min(5, Math.max(1, rounded));
}

/** Durée entre deux appels réels à Google (cache mémoire serveur). Défaut 48 h. */
function getGoogleReviewsCacheTtlMs(): number {
  const raw = process.env.GOOGLE_REVIEWS_CACHE_HOURS?.trim();
  if (raw) {
    const h = Number.parseFloat(raw.replace(',', '.'));
    if (Number.isFinite(h) && h >= 1) return Math.round(h * 60 * 60 * 1000);
  }
  return 48 * 60 * 60 * 1000;
}

let googleReviewsMemoryCache: { expiresAt: number; data: PublicReview[] } | null = null;

export async function fetchGooglePlaceReviews(): Promise<PublicReview[]> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY?.trim();
  const placeId = process.env.GOOGLE_PLACE_ID?.trim();
  if (!apiKey || !placeId) return [];

  const now = Date.now();
  if (googleReviewsMemoryCache && now < googleReviewsMemoryCache.expiresAt) {
    return googleReviewsMemoryCache.data;
  }

  try {
    const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(placeId)}`;
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'X-Goog-Api-Key': apiKey,
        'X-Goog-FieldMask': 'reviews',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      console.warn('[googlePlacesReviews]', res.status, body.slice(0, 200));
      return [];
    }

    const data = (await res.json()) as { reviews?: PlacesReviewRaw[] };
    const reviews = data.reviews;
    if (!Array.isArray(reviews) || reviews.length === 0) {
      googleReviewsMemoryCache = { expiresAt: now + getGoogleReviewsCacheTtlMs(), data: [] };
      return [];
    }

    const out: PublicReview[] = [];
    reviews.forEach((r, index) => {
      const text =
        (typeof r.originalText?.text === 'string' && r.originalText.text.trim()) ||
        (typeof r.text?.text === 'string' && r.text.text.trim()) ||
        '';
      if (!text) return;

      const publishTime =
        typeof r.publishTime === 'string' && r.publishTime.trim() ? r.publishTime.trim() : undefined;
      const idSuffix = publishTime ?? `idx-${index}`;
      const author =
        typeof r.authorAttribution?.displayName === 'string' && r.authorAttribution.displayName.trim()
          ? r.authorAttribution.displayName.trim()
          : undefined;

      out.push({
        id: `google-${idSuffix}-${index}`,
        source: 'google',
        stars: clampStarRating(Number(r.rating)),
        services: [],
        text,
        author,
        created_at: publishTime,
      });
    });

    googleReviewsMemoryCache = { expiresAt: now + getGoogleReviewsCacheTtlMs(), data: out };
    return out;
  } catch (err) {
    console.error('[googlePlacesReviews]', err);
    return [];
  }
}

export function mergeReviewsByDate(site: PublicReview[], google: PublicReview[]): PublicReview[] {
  const merged = [...site, ...google];
  merged.sort((a, b) => {
    const ta = Date.parse(a.created_at ?? '') || 0;
    const tb = Date.parse(b.created_at ?? '') || 0;
    return tb - ta;
  });
  return merged;
}
