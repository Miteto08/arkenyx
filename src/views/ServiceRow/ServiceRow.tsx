'use client';

import { useEffect, useRef, useState } from 'react';
import type { Service } from '@/models/types';
import ServiceRowContent from './ServiceRowContent';
import ServiceRowImage from './ServiceRowImage';
import styles from './ServiceRow.module.scss';

interface ServiceRowProps {
  service: Service;
  index: number;
  id?: string;
}

const MOBILE_MAX_WIDTH = 1100;

export default function ServiceRow({ service, index, id }: ServiceRowProps) {
  const ref = useRef<HTMLLIElement>(null);
  const prevScrollY = useRef(0);
  const scrollUpRef = useRef(false);
  const [inView, setInView] = useState(false);
  const [inViewText, setInViewText] = useState(false);
  const [appearImageFirst, setAppearImageFirst] = useState(false);
  const fromLeft = index % 2 === 1;
  const slideFromRight = index % 2 === 0;

  useEffect(() => {
    if (typeof window === 'undefined') return;
    prevScrollY.current = window.scrollY;
    const onScroll = () => {
      const current = window.scrollY;
      scrollUpRef.current = current < prevScrollY.current;
      requestAnimationFrame(() => {
        prevScrollY.current = window.scrollY;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        const isMobile = typeof window !== 'undefined' && window.innerWidth < MOBILE_MAX_WIDTH;
        if (isMobile) {
          if (ratio >= 0.1) {
            const currentY = typeof window !== 'undefined' ? window.scrollY : 0;
            const justScrolledUp = currentY < prevScrollY.current;
            if (typeof window !== 'undefined') prevScrollY.current = currentY;
            setAppearImageFirst(Boolean(scrollUpRef.current || justScrolledUp));
            setInView(true);
            setInViewText(true);
          } else if (ratio <= 0.05) {
            setInView(false);
            setInViewText(false);
          }
        } else {
          if (ratio >= 0.4) {
            const currentY = typeof window !== 'undefined' ? window.scrollY : 0;
            const justScrolledUp = currentY < prevScrollY.current;
            if (typeof window !== 'undefined') prevScrollY.current = currentY;
            setAppearImageFirst(false);
            setInView(true);
            setInViewText(true);
          } else if (ratio >= 0.25) {
            setInView(true);
            setInViewText(false);
          } else if (ratio <= 0.1) {
            setInView(false);
            setInViewText(false);
          }
        }
      },
      { threshold: [0.05, 0.1, 0.25, 0.4], rootMargin: '0px 0px 0px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={ref} id={id} className={styles.row}>
      <div className="container">
        <div
          className={`${styles.block} ${inView ? styles.inView : ''} ${inViewText ? styles.inViewText : ''} ${slideFromRight ? styles.slideFromRight : styles.slideFromLeft} ${appearImageFirst ? styles.appearImageFirst : ''}`}
        >
          {fromLeft ? (
            <>
              <ServiceRowContent service={service} />
              <ServiceRowImage imageSrc={service.image} alt={service.title} />
            </>
          ) : (
            <>
              <ServiceRowImage imageSrc={service.image} alt={service.title} />
              <ServiceRowContent service={service} />
            </>
          )}
        </div>
      </div>
    </li>
  );
}
