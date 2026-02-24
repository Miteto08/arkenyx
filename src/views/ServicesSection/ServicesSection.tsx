import { services } from '@/models/services';
import ServiceCard from '@/views/ServiceCard/ServiceCard';
import styles from './ServicesSection.module.scss';

export default function ServicesSection() {
  return (
    <section className={styles.section} id="services">
      <div className="container">
        <h2 className={styles.heading}>Nos services</h2>
        <p className={styles.intro}>
          Des prestations adaptées à vos besoins, expliquées simplement.
        </p>
        <ul className={styles.grid}>
          {services.map((service, index) => (
            <li key={service.id}>
              <ServiceCard service={service} index={index} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
