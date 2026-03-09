'use client';

import { useState, useEffect, useCallback } from 'react';
import type { Testimonial } from '@/types/testimonial';

const STORAGE_KEY = 'arkenyx-testimonials';

const initialList: Testimonial[] = [];

function loadTestimonials(): Testimonial[] {
  if (typeof window === 'undefined') return initialList;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Testimonial[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return [...initialList];
}

function saveTestimonials(list: Testimonial[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialList);

  useEffect(() => {
    setTestimonials(loadTestimonials());
  }, []);

  const handleReviewSubmitted = useCallback((review: Testimonial) => {
    setTestimonials((prev) => {
      const next = [...prev, review];
      saveTestimonials(next);
      return next;
    });
  }, []);

  return [testimonials, handleReviewSubmitted] as const;
}
