'use client';

import { useState } from 'react';
import { get } from '@/lib/i18n';
import styles from './TestimonialsSection.module.scss';

const MAX_SERVICES_VISIBLE_COLLAPSED = 1;

interface TestimonialCardServicesProps {
  services: string[];
}

export default function TestimonialCardServices({ services }: TestimonialCardServicesProps) {
  const [expandServices, setExpandServices] = useState(false);
  const hasMoreServices = services.length > MAX_SERVICES_VISIBLE_COLLAPSED;
  const visibleServicesCollapsed = services.slice(0, MAX_SERVICES_VISIBLE_COLLAPSED);
  const voirTout = get<string>('home.testimonials.voirTout');
  const voirMoins = get<string>('home.testimonials.voirMoins');

  if (services.length === 0) return null;

  return (
    <div className={styles.servicesRow}>
      {!expandServices ? (
        <div className={styles.servicesLineWithExpand}>
          {visibleServicesCollapsed.map((s, k) => (
            <span key={k} className={styles.serviceTag}>
              {s}
            </span>
          ))}
          {hasMoreServices && (
            <>
              <span className={styles.serviceEllipsis}>…</span>
              <button
                type="button"
                className={styles.expandBtn}
                onClick={() => setExpandServices(true)}
                aria-expanded={false}
              >
                {voirTout}
              </button>
            </>
          )}
        </div>
      ) : (
        <>
          <div className={styles.servicesTagsWrapExpanded}>
            {services.map((s, k) => (
              <span key={k} className={styles.serviceTag}>
                {s}
              </span>
            ))}
          </div>
          <div className={styles.servicesExpandLine}>
            <button
              type="button"
              className={styles.expandBtn}
              onClick={() => setExpandServices(false)}
              aria-expanded={true}
            >
              {voirMoins}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
