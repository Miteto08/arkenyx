import type { Service } from '@/models/types';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.description}>{service.description}</p>
    </article>
  );
}
