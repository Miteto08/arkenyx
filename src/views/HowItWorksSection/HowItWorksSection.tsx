'use client';

import { useRef, useEffect, useState, type CSSProperties } from 'react';
import { get } from '@/lib/i18n';
import styles from './HowItWorksSection.module.scss';

interface Step {
  title: string;
  description: string;
}

interface Mode {
  title: string;
  description: string;
}

export default function HowItWorksSection() {
  const title = get<string>('home.howItWorks.title');
  const intro = get<string>('home.howItWorks.intro');
  const steps = get<Step[]>('home.howItWorks.steps');
  const modesTitle = get<string>('home.howItWorks.modesTitle');
  const modesIntro = get<string>('home.howItWorks.modesIntro');
  const modes = get<Mode[]>('home.howItWorks.modes');
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
          {title}
        </h2>
        <p className={styles.intro}>{intro}</p>
        <ol className={styles.steps} role="list">
          {steps.map((step, i) => (
            <li
              key={i}
              className={styles.step}
              style={
                {
                  '--step-delay-in': `${i * 0.12}s`,
                  '--step-delay-out': `${Math.max(0, (steps.length - 1 - i) * 0.08)}s`,
                } as CSSProperties
              }
            >
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
        <div className={styles.modesBlock}>
          <h3 id="how-modes-title" className={styles.modesHeading}>
            {modesTitle}
          </h3>
          <p className={styles.modesIntro}>{modesIntro}</p>
          <ul className={styles.modes} role="list" aria-labelledby="how-modes-title">
            {modes.map((mode, i) => (
              <li key={i} className={styles.mode}>
                <h4 className={styles.modeTitle}>{mode.title}</h4>
                <p className={styles.modeDesc}>{mode.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
