'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Service } from '@/models/types';
import styles from './ServiceRow.module.scss';

interface ServiceRowProps {
  service: Service;
  index: number;
}

export default function ServiceRow({ service, index }: ServiceRowProps) {
  const ref = useRef<HTMLLIElement>(null);
  const [inView, setInView] = useState(false);
  const fromLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const contentBlock = (
    <div
      className={`${styles.content} ${inView ? styles.inView : ''} ${fromLeft ? styles.fromLeft : styles.fromRight}`}
    >
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </div>
  );

  const imageBlock = (
    <div className={styles.imageWrap}>
      {service.image ? (
        <Image
          src={service.image}
          alt=""
          width={480}
          height={320}
          className={styles.image}
          unoptimized
        />
      ) : (
        <div className={styles.placeholder} aria-hidden />
      )}
    </div>
  );

  return (
    <li ref={ref} className={styles.row}>
      {fromLeft ? (
        <>
          {contentBlock}
          {imageBlock}
        </>
      ) : (
        <>
          {imageBlock}
          {contentBlock}
        </>
      )}
    </li>
  );
}
