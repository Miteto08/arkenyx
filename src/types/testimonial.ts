export interface Testimonial {
  stars: number;
  services: string[];
  text: string;
  author?: string;
  /** ISO date string from API (e.g. 2026-02-25) */
  created_at?: string;
}
