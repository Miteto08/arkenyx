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

export default function ServiceRow({ service, index, id }: ServiceRowProps) {
  const ref = useRef<HTMLLIElement>(null);
  const [inView, setInView] = useState(false);
  const fromLeft = index % 2 === 1;
  const slideFromRight = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setInView((prev) => {
          if (ratio >= 0.45) return true;
          if (ratio <= 0.15) return false;
          return prev;
        });
      },
      { threshold: [0.15, 0.45], rootMargin: '-8% 0px -22% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li ref={ref} id={id} className={styles.row}>
      <div className="container">
        <div
          className={`${styles.block} ${inView ? styles.inView : ''} ${slideFromRight ? styles.slideFromRight : styles.slideFromLeft}`}
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
