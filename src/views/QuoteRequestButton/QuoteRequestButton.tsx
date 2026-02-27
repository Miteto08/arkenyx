'use client';

import { useState } from 'react';
import QuoteModal from '@/views/QuoteModal/QuoteModal';
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
        aria-label="Demander un devis gratuit"
      >
        Demander un devis gratuit
      </button>
      <QuoteModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
