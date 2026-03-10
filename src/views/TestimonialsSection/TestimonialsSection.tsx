'use client';

import Link from 'next/link';
import { get } from '@/lib/i18n';
import { useTestimonials } from './useTestimonials';
import TestimonialsSectionHeader from './TestimonialsSectionHeader';
import TestimonialsCarousel from './TestimonialsCarousel';
import styles from './TestimonialsSection.module.scss';

const CAROUSEL_MAX_REVIEWS = 15;

export default function TestimonialsSection() {
  const [testimonials, handleReviewSubmitted, loading] = useTestimonials();
  const n = testimonials.length;
  const carouselReviews = testimonials.slice(0, CAROUSEL_MAX_REVIEWS);
  const loadingLabel = get<string>('home.testimonials.loading');
  const placeholderLabel = get<string>('home.testimonials.placeholder');
  const ctaSeeAllAria = get<string>('home.testimonials.ctaSeeAllAriaWithCount').replace('{count}', String(n));
  const ctaSeeAllText = get<string>('home.testimonials.ctaSeeAllWithCount').replace('{count}', String(n));

  return (
    <section
      className={styles.section}
      id="avis"
      aria-labelledby="testimonials-title"
    >
      <div className="container">
        <TestimonialsSectionHeader onReviewSubmitted={handleReviewSubmitted} />
        {loading && n === 0 ? (
          <div className={styles.placeholder} role="status" aria-busy="true">
            <p>{loadingLabel}</p>
          </div>
        ) : n === 0 ? (
          <div className={styles.placeholder} role="status">
            <p>{placeholderLabel}</p>
          </div>
        ) : (
          <>
            <TestimonialsCarousel testimonials={carouselReviews} />
            <div className={styles.ctaSeeAllWrap}>
              <Link
                href="/avis/"
                className={styles.ctaSeeAll}
                aria-label={ctaSeeAllAria}
              >
                {ctaSeeAllText}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
