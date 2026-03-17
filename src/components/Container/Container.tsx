import styles from './Container.module.css';

export interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
}

const sizeClasses: Record<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full', string> = {
  xs: styles['container-xs'],
  sm: styles['container-sm'],
  md: styles['container-md'],
  lg: styles['container-lg'],
  xl: styles['container-xl'],
  '2xl': styles['container-2xl'],
  full: styles['container-full'],
};

export function Container({ children, className = '', size = 'lg' }: ContainerProps) {
  return (
    <div className={`${styles.container} ${sizeClasses[size]} ${className}`}>
      {children}
    </div>
  );
}
