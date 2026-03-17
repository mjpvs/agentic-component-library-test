import styles from './Box.module.css';

export interface BoxProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
}

export function Box({ children, className = '', as: Component = 'div', style }: BoxProps) {
  return <Component className={`${styles.box} ${className}`} style={style}>{children}</Component>;
}
