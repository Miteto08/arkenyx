export type TestimonialSource = 'site' | 'google';

export interface Testimonial {
  /** Identifiant stable pour les clés React (UUID base ou google-…) */
  id?: string;
  /** Avis saisi sur le site (base) ou récupéré depuis Google (affichage seulement). */
  source?: TestimonialSource;
  stars: number;
  services: string[];
  text: string;
  author?: string;
  /** ISO date string from API (e.g. 2026-02-25) */
  created_at?: string;
}
