'use client';

import { useState } from 'react';
import ReviewModal from '@/views/ReviewModal/ReviewModal';
import { get } from '@/lib/i18n';
import type { Testimonial } from '@/models/testimonials';
import styles from './LeaveReviewButton.module.scss';

interface LeaveReviewButtonProps {
  className?: string;
  onReviewSubmitted?: (review: Testimonial) => void;
}

export default function LeaveReviewButton({ className, onReviewSubmitted }: LeaveReviewButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className ?? styles.cta}
        onClick={() => setIsOpen(true)}
        aria-label={get<string>('home.testimonials.ctaLeaveReviewAria')}
      >
        {get<string>('home.testimonials.ctaLeaveReview')}
      </button>
      <ReviewModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={onReviewSubmitted}
      />
    </>
  );
}
