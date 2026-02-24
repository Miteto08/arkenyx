import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <h2 className={styles.heading}>Nous contacter</h2>
        <p className={styles.text}>
          Une question, un devis ou un projet ? N’hésitez pas à nous joindre.
        </p>
        <a href="mailto:contact@arkenyx.fr" className={styles.cta}>
          Envoyer un message
        </a>
      </div>
    </section>
  );
}
