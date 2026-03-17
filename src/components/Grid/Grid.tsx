import styles from './Grid.module.css';

export interface GridProps {
  children: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const columnsClasses: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string> = {
  1: styles['grid-1'],
  2: styles['grid-2'],
  3: styles['grid-3'],
  4: styles['grid-4'],
  5: styles['grid-5'],
  6: styles['grid-6'],
  7: styles['grid-7'],
  8: styles['grid-8'],
  9: styles['grid-9'],
  10: styles['grid-10'],
  11: styles['grid-11'],
  12: styles['grid-12'],
};

const gapClasses: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string> = {
  xs: styles['gap-xs'],
  sm: styles['gap-sm'],
  md: styles['gap-md'],
  lg: styles['gap-lg'],
  xl: styles['gap-xl'],
};

export function Grid({ children, className = '', columns = 12, gap = 'md' }: GridProps) {
  return (
    <div className={`${styles.grid} ${columnsClasses[columns]} ${gapClasses[gap]} ${className}`}>
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

const spanClasses: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string> = {
  1: styles['span-1'],
  2: styles['span-2'],
  3: styles['span-3'],
  4: styles['span-4'],
  5: styles['span-5'],
  6: styles['span-6'],
  7: styles['span-7'],
  8: styles['span-8'],
  9: styles['span-9'],
  10: styles['span-10'],
  11: styles['span-11'],
  12: styles['span-12'],
};

const startClasses: Record<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12, string> = {
  1: styles['start-1'],
  2: styles['start-2'],
  3: styles['start-3'],
  4: styles['start-4'],
  5: styles['start-5'],
  6: styles['start-6'],
  7: styles['start-7'],
  8: styles['start-8'],
  9: styles['start-9'],
  10: styles['start-10'],
  11: styles['start-11'],
  12: styles['start-12'],
};

export function GridItem({ children, className = '', span, start }: GridItemProps) {
  const classes = [
    styles['grid-item'],
    span ? spanClasses[span] : '',
    start ? startClasses[start] : '',
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={`${classes} ${className}`}>{children}</div>;
}
