import styles from './Card.module.css';

export interface CardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  padding?: 'none' | 'small' | 'medium' | 'large';
}

const paddingClasses: Record<'none' | 'small' | 'medium' | 'large', string> = {
  none: styles['card-padding-none'],
  small: styles['card-padding-small'],
  medium: styles['card-padding-medium'],
  large: styles['card-padding-large'],
};

export function Card({
  children,
  title,
  className = '',
  padding = 'medium',
}: CardProps) {
  return (
    <div className={`${styles.card} ${paddingClasses[padding]} ${className}`}>
      {title && <div className={styles['card-title']}>{title}</div>}
      <div className={styles['card-content']}>{children}</div>
    </div>
  );
}
