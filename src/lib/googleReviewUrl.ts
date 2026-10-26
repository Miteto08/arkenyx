const FALLBACK_PLACE_ID = 'ChIJWdOG7slLoQMRXJsux-4h4Jc';

export function getGoogleWriteReviewUrl(): string {
  const placeId =
    process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID?.trim() || FALLBACK_PLACE_ID;
  return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(placeId)}`;
}
