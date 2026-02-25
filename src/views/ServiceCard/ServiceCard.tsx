import type { Service } from '@/models/types';
import styles from './ServiceCard.module.scss';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const text =
    service.description ||
    (service.items?.length ? service.items.slice(0, 2).join(' • ') : '');
  return (
    <article
      className={styles.card}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <h3 className={styles.title}>{service.title}</h3>
      {text && <p className={styles.description}>{text}</p>}
    </article>
  );
}
