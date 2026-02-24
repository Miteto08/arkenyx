import { services } from '@/models/services';
import ServiceRow from '@/views/ServiceRow/ServiceRow';
import styles from './ServicesSection.module.scss';

export default function ServicesSection() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {services.map((service, index) => (
          <ServiceRow key={service.id} service={service} index={index} />
        ))}
      </ul>
    </section>
  );
}
