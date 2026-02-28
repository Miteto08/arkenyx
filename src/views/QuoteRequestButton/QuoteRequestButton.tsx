'use client';

import { useState } from 'react';
import QuoteModal from '@/views/QuoteModal/QuoteModal';
import { get } from '@/lib/i18n';
import styles from './QuoteRequestButton.module.scss';

interface QuoteRequestButtonProps {
  className?: string;
}

export default function QuoteRequestButton({ className }: QuoteRequestButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={className ?? styles.cta}
        onClick={() => setIsOpen(true)}
        aria-label={get<string>('common.ctaQuote')}
      >
        {get<string>('common.ctaQuote')}
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
