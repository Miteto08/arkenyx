'use client';

import { useState, useEffect, useCallback } from 'react';
import { testimonialsList, type Testimonial } from '@/models/testimonials';

const STORAGE_KEY = 'arkenyx-testimonials';

function loadTestimonials(): Testimonial[] {
  if (typeof window === 'undefined') return testimonialsList;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as Testimonial[];
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch {
    // ignore
  }
  return [...testimonialsList];
}

function saveTestimonials(list: Testimonial[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch {
    // ignore
  }
}

export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(testimonialsList);

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
