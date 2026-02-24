import Image from 'next/image';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <a href="/" className={styles.logo}>
          <Image
            src="/Logo-removebg-preview.png"
            alt="Arkenyx"
            width={420}
            height={120}
            priority
            unoptimized
            className={styles.logoImg}
          />
        </a>
        <nav className={styles.nav} aria-label="Navigation principale">
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
