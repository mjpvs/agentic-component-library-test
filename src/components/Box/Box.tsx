import styles from './Box.module.css';

export interface BoxProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export function Box({ children, className = '', as: Component = 'div' }: BoxProps) {
  return <Component className={`${styles.box} ${className}`}>{children}</Component>;
}
