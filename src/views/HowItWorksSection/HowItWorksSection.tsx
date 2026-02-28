import { get } from '@/lib/i18n';
import styles from './HowItWorksSection.module.scss';

interface Step {
  title: string;
  description: string;
}

export default function HowItWorksSection() {
  const steps = get<Step[]>('home.howItWorks.steps');
  return (
    <section className={styles.section} id="comment-ca-marche" aria-labelledby="how-title">
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
