import styles from './Flex.module.css';

export interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
}

const directionClasses: Record<string, string> = {
  row: styles['flex-row'],
  column: styles['flex-column'],
  'row-reverse': styles['flex-row-reverse'],
  'column-reverse': styles['flex-column-reverse'],
};

const justifyClasses: Record<string, string> = {
  start: styles['justify-start'],
  end: styles['justify-end'],
  center: styles['justify-center'],
  between: styles['justify-between'],
  around: styles['justify-around'],
  evenly: styles['justify-evenly'],
};

const alignClasses: Record<string, string> = {
  start: styles['align-start'],
  end: styles['align-end'],
  center: styles['align-center'],
  stretch: styles['align-stretch'],
  baseline: styles['align-baseline'],
};

const gapClasses: Record<string, string> = {
  xs: styles['gap-xs'],
  sm: styles['gap-sm'],
  md: styles['gap-md'],
  lg: styles['gap-lg'],
  xl: styles['gap-xl'],
};

export function Flex({
  children,
  className = '',
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap,
  wrap = 'nowrap',
}: FlexProps) {
  const classes = [
    styles.flex,
    directionClasses[direction],
    justifyClasses[justify],
    alignClasses[align],
    gap ? gapClasses[gap] : '',
    wrap === 'nowrap' ? '' : wrap === 'wrap' ? styles['flex-wrap'] : styles['flex-wrap-reverse'],
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={`${classes} ${className}`}>{children}</div>;
}
