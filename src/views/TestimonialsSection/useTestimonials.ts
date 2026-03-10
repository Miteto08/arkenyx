'use client';

import { useState, useEffect, useCallback } from 'react';
import { get } from '@/lib/i18n';
import type { Testimonial } from '@/types/testimonial';

const initialList: Testimonial[] = [];

async function fetchReviews(): Promise<Testimonial[]> {
  const res = await fetch('/api/reviews');
  if (!res.ok) return [];
  const data = (await res.json()) as Array<{
    stars: number;
    services: string[];
    text: string;
    author?: string;
  }>;
  return data.map((r) => ({
    stars: r.stars,
    services: r.services,
    text: r.text,
    author: r.author,
  }));
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialList);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchReviews()
      .then((list) => {
        if (!cancelled) setTestimonials(list);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const handleReviewSubmitted = useCallback(async (review: Testimonial) => {
    const res = await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error((err as { error?: string }).error ?? get<string>('home.testimonials.submitError'));
    }
    const list = await fetchReviews();
    setTestimonials(list);
  }, []);

  return [testimonials, handleReviewSubmitted, loading] as const;
}
