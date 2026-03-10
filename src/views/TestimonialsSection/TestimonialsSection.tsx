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
            <p>{get<string>('home.testimonials.loading')}</p>
          </div>
        ) : n === 0 ? (
          <div className={styles.placeholder} role="status">
            <p>{get<string>('home.testimonials.placeholder')}</p>
          </div>
        ) : (
          <>
            <TestimonialsCarousel testimonials={carouselReviews} />
            <div className={styles.ctaSeeAllWrap}>
              <Link
                href="/avis/"
                className={styles.ctaSeeAll}
                aria-label={get<string>('home.testimonials.ctaSeeAllAriaWithCount').replace('{count}', String(n))}
              >
                {get<string>('home.testimonials.ctaSeeAllWithCount').replace('{count}', String(n))}
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
