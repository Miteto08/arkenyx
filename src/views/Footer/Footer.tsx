import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Arkenyx. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
