import styles from './Heading.module.css';

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

const levelClasses: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  1: styles['heading-1'],
  2: styles['heading-2'],
  3: styles['heading-3'],
  4: styles['heading-4'],
  5: styles['heading-5'],
  6: styles['heading-6'],
};

export function Heading({ level = 1, children, className = '' }: HeadingProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  return <Tag className={`${styles.heading} ${levelClasses[level]} ${className}`}>{children}</Tag>;
}
