import Image from 'next/image';
import { get } from '@/lib/i18n';
import styles from './ServiceRow.module.scss';

interface ServiceRowImageProps {
  imageSrc: string | undefined;
  alt: string;
}

export default function ServiceRowImage({ imageSrc, alt }: ServiceRowImageProps) {
  const imageAlt = `${get<string>('common.imageIllustrationLabel')}${alt}`;

  return (
    <div className={styles.imageWrap}>
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={imageAlt}
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
