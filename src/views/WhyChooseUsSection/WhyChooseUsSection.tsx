'use client';

import { useRef, useEffect, useState } from 'react';
import { get } from '@/lib/i18n';
import styles from './WhyChooseUsSection.module.scss';

export default function WhyChooseUsSection() {
  const points = get<string[]>('home.whyChooseUs.points');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.listVisible : ''}`}
      id="pourquoi-nous"
      aria-labelledby="why-title"
    >
      <div className="container">
        <h2 id="why-title" className={styles.heading}>{get<string>('home.whyChooseUs.title')}</h2>
        <p className={styles.intro}>{get<string>('home.whyChooseUs.intro')}</p>
        <ul className={styles.list} role="list">
          {points.map((point, i) => (
            <li key={i} className={styles.item}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
