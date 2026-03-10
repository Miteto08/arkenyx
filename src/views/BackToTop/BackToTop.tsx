'use client';

import { useEffect, useState } from 'react';
import { get } from '@/lib/i18n';
import { IconArrowUp } from '@/components/Icons';
import styles from './BackToTop.module.scss';

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className={styles.button}
      onClick={scrollToTop}
      aria-label={get<string>('common.backToTop')}
    >
      <span className={styles.arrow} aria-hidden>
        <IconArrowUp />
      </span>
    </button>
  );
}
