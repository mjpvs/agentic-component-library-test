import styles from './Flex.module.css';

export interface FlexProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  style?: React.CSSProperties;
}

const directionClasses: Record<'row' | 'column' | 'row-reverse' | 'column-reverse', string> = {
  row: styles['flex-row'],
  column: styles['flex-column'],
  'row-reverse': styles['flex-row-reverse'],
  'column-reverse': styles['flex-column-reverse'],
};

const justifyClasses: Record<'start' | 'end' | 'center' | 'between' | 'around' | 'evenly', string> = {
  start: styles['justify-start'],
  end: styles['justify-end'],
  center: styles['justify-center'],
  between: styles['justify-between'],
  around: styles['justify-around'],
  evenly: styles['justify-evenly'],
};

const alignClasses: Record<'start' | 'end' | 'center' | 'stretch' | 'baseline', string> = {
  start: styles['align-start'],
  end: styles['align-end'],
  center: styles['align-center'],
  stretch: styles['align-stretch'],
  baseline: styles['align-baseline'],
};

const gapClasses: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl', string> = {
  xs: styles['gap-xs'],
  sm: styles['gap-sm'],
  md: styles['gap-md'],
  lg: styles['gap-lg'],
  xl: styles['gap-xl'],
};

const wrapClasses: Record<'nowrap' | 'wrap' | 'wrap-reverse', string> = {
  nowrap: '',
  wrap: styles['flex-wrap'],
  'wrap-reverse': styles['flex-wrap-reverse'],
};

export function Flex({
  children,
  className = '',
  direction = 'row',
  justify = 'start',
  align = 'stretch',
  gap,
  wrap = 'nowrap',
  style,
}: FlexProps) {
  const classes = [
    styles.flex,
    directionClasses[direction],
    justifyClasses[justify],
    alignClasses[align],
    gap ? gapClasses[gap] : '',
    wrapClasses[wrap],
  ]
    .filter(Boolean)
    .join(' ');

  return <div className={`${classes} ${className}`} style={style}>{children}</div>;
}
