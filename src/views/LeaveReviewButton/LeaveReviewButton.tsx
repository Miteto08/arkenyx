'use client';

import { get } from '@/lib/i18n';
import { getGoogleWriteReviewUrl } from '@/lib/googleReviewUrl';
import styles from './LeaveReviewButton.module.scss';

interface LeaveReviewButtonProps {
  className?: string;
}

export default function LeaveReviewButton({ className }: LeaveReviewButtonProps) {
  const ctaLabel = get<string>('home.testimonials.ctaLeaveReview');
  const ctaAria = get<string>('home.testimonials.ctaLeaveReviewAria');
  const href = getGoogleWriteReviewUrl();

  return (
    <a
      href={href}
      className={className ?? styles.cta}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ctaAria}
    >
      {ctaLabel}
    </a>
  );
}
