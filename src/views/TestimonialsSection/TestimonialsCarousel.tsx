'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { get } from '@/lib/i18n';
import { IconChevronLeft, IconChevronRight } from '@/components/Icons';
import TestimonialCard from '@/views/TestimonialsSection/TestimonialCard';
import type { Testimonial } from '@/types/testimonial';
import styles from './TestimonialsSection.module.scss';

const AUTO_ADVANCE_MS = 5500;

interface TestimonialsCarouselProps {
  testimonials: Testimonial[];
}

export default function TestimonialsCarousel({ testimonials }: TestimonialsCarouselProps) {
  const n = testimonials.length;
  const [index, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isLaptop, setIsLaptop] = useState(false);
  const [noTransition, setNoTransition] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const m = window.matchMedia('(min-width: 1024px)');
    setIsLaptop(m.matches);
    const f = () => setIsLaptop(m.matches);
    m.addEventListener('change', f);
    return () => m.removeEventListener('change', f);
  }, []);

  const useCarousel = n >= 5;
  const cardsVisible = isLaptop && useCarousel ? 4 : 1;
  const maxIndex = n - cardsVisible;
  const infinite = useCarousel && n > cardsVisible;
  const trackList = infinite
    ? [...testimonials, ...testimonials, ...testimonials]
    : testimonials;
  const trackN = trackList.length;
  const startIndex = infinite ? n : 0;

  useEffect(() => {
    if (!infinite) setIndex((i) => Math.min(Math.max(i, 0), maxIndex));
    else setIndex(startIndex);
  }, [infinite, startIndex, maxIndex]);

  const goPrev = useCallback(() => {
    if (infinite) setIndex((i) => i - 1);
    else setIndex((i) => Math.max(0, i - 1));
  }, [infinite]);

  const goNext = useCallback(() => {
    if (infinite) setIndex((i) => i + 1);
    else setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, [infinite, maxIndex]);

  const resetInterval = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(goNext, AUTO_ADVANCE_MS);
    }
  }, [goNext]);

  const handleTrackTransitionEnd = useCallback(() => {
    if (!infinite) return;
    setIndex((i) => {
      if (i >= 2 * n) {
        setNoTransition(true);
        return n;
      }
      if (i <= 0) {
        setNoTransition(true);
        return n;
      }
      return i;
    });
  }, [infinite, n]);

  useEffect(() => {
    if (!noTransition) return;
    const t = requestAnimationFrame(() => setNoTransition(false));
    return () => cancelAnimationFrame(t);
  }, [noTransition, index]);

  useEffect(() => {
    if (!useCarousel || n < 2) return;
    intervalRef.current = setInterval(goNext, AUTO_ADVANCE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [n, goNext, useCarousel]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!useCarousel) return;
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!useCarousel || touchStart === null || n < 2) return;
    const end = e.changedTouches[0].clientX;
    const delta = touchStart - end;
    if (delta > 50) goNext();
    else if (delta < -50) goPrev();
    setTouchStart(null);
  };

  const navPrevAria = get<string>('home.testimonials.navPrevAria');
  const navNextAria = get<string>('home.testimonials.navNextAria');

  return (
    <div className={styles.carouselOuter}>
      <div
        className={`${styles.carouselWrap} ${!useCarousel ? styles.staticGrid : ''}`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          ref={trackRef}
          className={`${styles.track} ${noTransition ? styles.trackNoTransition : ''}`}
          style={{ ['--index' as string]: index }}
          onTransitionEnd={handleTrackTransitionEnd}
        >
          {trackList.map((t, i) => (
            <TestimonialCard
              key={t.id ? `${t.id}-${i}` : `card-${i}-${t.text?.slice(0, 12) ?? ''}`}
              testimonial={t}
              isVisible={i >= index && i < index + cardsVisible}
            />
          ))}
        </div>
      </div>
      {useCarousel && (
        <div className={styles.navWrap}>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            onClick={() => {
              goPrev();
              resetInterval();
            }}
            aria-label={navPrevAria}
          >
            <IconChevronLeft className={styles.navBtnIcon} />
          </button>
          <button
            type="button"
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={() => {
              goNext();
              resetInterval();
            }}
            aria-label={navNextAria}
          >
            <IconChevronRight className={styles.navBtnIcon} />
          </button>
        </div>
      )}
    </div>
  );
}
