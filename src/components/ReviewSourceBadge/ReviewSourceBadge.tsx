'use client';

import { get } from '@/lib/i18n';
import type { TestimonialSource } from '@/types/testimonial';

type ReviewSourceBadgeProps = {
  source?: TestimonialSource;
  className?: string;
};

export default function ReviewSourceBadge({ source, className }: ReviewSourceBadgeProps) {
  if (source !== 'google') return null;
  const label = get<string>('home.testimonials.sourceGoogle');
  const title = get<string>('home.testimonials.sourceGoogleAria');
  return (
    <span className={className} title={title}>
      {label}
    </span>
  );
}
