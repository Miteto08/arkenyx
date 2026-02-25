'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import type { Service } from '@/models/types';
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
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.45, rootMargin: '-8% 0px -22% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const contentBlock = (
    <div className={styles.content}>
      <h3 className={styles.title}>{service.title}</h3>
      {service.description &&
        service.description.split('\n\n').filter(Boolean).map((paragraph, i) => (
          <p key={i} className={styles.description}>
            {paragraph}
          </p>
        ))}
      {service.items?.length ? (
        <ul className={styles.list}>
          {service.items.map((item, i) => (
            <li key={i} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
      ) : null}
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
    <li ref={ref} id={id} className={styles.row}>
      <div className="container">
        <div
          className={`${styles.block} ${inView ? styles.inView : ''} ${slideFromRight ? styles.slideFromRight : styles.slideFromLeft}`}
        >
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
        </div>
      </div>
    </li>
  );
}
