import Image from 'next/image';
import styles from './ServiceRow.module.scss';

interface ServiceRowImageProps {
  imageSrc: string | undefined;
  alt: string;
}

export default function ServiceRowImage({ imageSrc, alt }: ServiceRowImageProps) {
  return (
    <div className={styles.imageWrap}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={`Illustration : ${alt}`}
          fill
          className={styles.image}
          sizes="(max-width: 767px) 100vw, 50vw"
          unoptimized
        />
      ) : (
        <div className={styles.placeholder} aria-hidden />
      )}
    </div>
  );
}
