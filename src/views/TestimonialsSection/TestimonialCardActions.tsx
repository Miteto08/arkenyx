'use client';

import { get } from '@/lib/i18n';
import styles from './TestimonialsSection.module.scss';

interface TestimonialCardActionsProps {
  expanded: boolean;
  onToggle: () => void;
}

export default function TestimonialCardActions({ expanded, onToggle }: TestimonialCardActionsProps) {
  const voirPlus = get<string>('home.testimonials.voirPlus');
  const voirMoins = get<string>('home.testimonials.voirMoins');

  return (
    <div className={styles.cardActionsRow}>
      <button
        type="button"
        className={styles.expandBtn}
        onClick={onToggle}
        aria-expanded={expanded}
      >
        {expanded ? voirMoins : voirPlus}
      </button>
    </div>
  );
}
