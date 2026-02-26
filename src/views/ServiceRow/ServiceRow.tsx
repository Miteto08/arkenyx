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
      {service.notePoints?.length ? (
        <div className={styles.noteBlock} role="note">
          {service.notePoints.map((point, i) => (
            <p key={i} className={styles.notePoint}>
              <span className={styles.noteCheck} aria-hidden>✔</span>
              {point}
            </p>
          ))}
        </div>
      ) : null}
    </div>
  );

  const imageBlock = (
    <div className={styles.imageWrap}>
      {service.image ? (
        <Image
          src={service.image}
          alt=""
          fill
          className={styles.image}
          sizes="(max-width: 767px) 100vw, 50vw"
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
