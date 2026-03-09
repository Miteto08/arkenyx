'use client';

import { useRef, useEffect, useState } from 'react';
import { get } from '@/lib/i18n';
import styles from './HowItWorksSection.module.scss';

interface Step {
  title: string;
  description: string;
}

export default function HowItWorksSection() {
  const steps = get<Step[]>('home.howItWorks.steps');
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;
        setIsVisible((prev) => {
          if (ratio >= 0.2) return true;
          if (ratio <= 0.05) return false;
          return prev;
        });
      },
      { threshold: [0.05, 0.2, 0.5], rootMargin: '-5% 0px -10% 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.stepsVisible : ''}`}
      id="comment-ca-marche"
      aria-labelledby="how-title"
    >
      <div className="container">
        <h2 id="how-title" className={styles.heading}>
          {get<string>('home.howItWorks.title')}
        </h2>
        <p className={styles.intro}>{get<string>('home.howItWorks.intro')}</p>
        <ol className={styles.steps} role="list">
          {steps.map((step, i) => (
            <li key={i} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden>
                {i + 1}
              </span>
              <div className={styles.stepContent}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
