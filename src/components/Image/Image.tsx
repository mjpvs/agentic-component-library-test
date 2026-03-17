import styles from './Image.module.css';

export interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number | string;
  height?: number | string;
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  loading?: 'lazy' | 'eager';
  className?: string;
}

export function Image({
  src,
  alt,
  caption,
  width,
  height,
  objectFit = 'cover',
  loading = 'lazy',
  className = '',
}: ImageProps) {
  return (
    <figure className={`${styles.figure} ${className}`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        className={styles.image}
        style={{ objectFit }}
      />
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
