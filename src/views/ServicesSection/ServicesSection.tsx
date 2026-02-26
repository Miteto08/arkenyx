import { services } from '@/models/services';
import ServiceRow from '@/views/ServiceRow/ServiceRow';
import styles from './ServicesSection.module.scss';

export default function ServicesSection() {
  return (
    <section className={styles.section} aria-label="Nos services">
      <ul className={styles.list} role="list">
        {services.map((service, index) => (
          <ServiceRow
            key={service.id}
            service={service}
            index={index}
            id={index === 0 ? 'services' : undefined}
          />
        ))}
      </ul>
    </section>
  );
}
