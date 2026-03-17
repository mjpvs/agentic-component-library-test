import styles from './Grid.module.css';

export interface GridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const gapClasses: Record<string, string> = {
  xs: styles['gap-xs'],
  sm: styles['gap-sm'],
  md: styles['gap-md'],
  lg: styles['gap-lg'],
  xl: styles['gap-xl'],
};

export function Grid({ children, className = '', columns = 12, gap = 'md' }: GridProps) {
  return (
    <div className={`${styles.grid} ${styles[`grid-${columns}`]} ${gapClasses[gap]} ${className}`}>
      {children}
    </div>
  );
}

export interface GridItemProps {
  children: React.ReactNode;
  className?: string;
  span?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  start?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export function GridItem({ children, className = '', span, start }: GridItemProps) {
  const classes = [
    styles['grid-item'],
    span ? styles[`span-${span}`] : '',
    start ? styles[`start-${start}`] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={`${classes} ${className}`}>{children}</div>;
}
