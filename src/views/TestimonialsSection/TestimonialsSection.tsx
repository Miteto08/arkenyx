'use client';

import { get } from '@/lib/i18n';
import { useTestimonials } from './useTestimonials';
import TestimonialsSectionHeader from './TestimonialsSectionHeader';
import TestimonialsCarousel from './TestimonialsCarousel';
import styles from './TestimonialsSection.module.scss';

export default function TestimonialsSection() {
  const [testimonials, handleReviewSubmitted, loading] = useTestimonials();
  const n = testimonials.length;

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
          <TestimonialsCarousel testimonials={testimonials} />
        )}
      </div>
    </section>
  );
}
