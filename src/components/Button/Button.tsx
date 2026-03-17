import styles from './Button.module.css';

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const variantClasses: Record<string, string> = {
  primary: styles['btn-primary'],
  secondary: styles['btn-secondary'],
  outline: styles['btn-outline'],
};

const sizeClasses: Record<string, string> = {
  small: styles['btn-small'],
  medium: styles['btn-medium'],
  large: styles['btn-large'],
};

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
