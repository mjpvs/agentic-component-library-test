import styles from './Tag.module.css';

export interface TagProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export function Tag({ children, href, className = '' }: TagProps) {
  const classNames = `${styles.tag} ${className}`;

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return (
    <span className={classNames}>
      {children}
    </span>
  );
}
