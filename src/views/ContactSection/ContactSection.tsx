import styles from './ContactSection.module.scss';

export default function ContactSection() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="contact-title">
      <div className="container">
        <h2 id="contact-title" className={styles.heading}>Nous contacter</h2>
        <p className={styles.text}>
          Une question, un devis ou un projet ? N’hésitez pas à nous joindre.
        </p>
        <a href="mailto:contact@arkenyx.fr" className={styles.cta} aria-label="Envoyer un message par e-mail à contact@arkenyx.fr">
          Envoyer un message
        </a>
      </div>
    </section>
  );
}
