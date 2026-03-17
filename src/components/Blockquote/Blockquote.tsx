import styles from './Blockquote.module.css';

export interface BlockquoteProps {
  children: React.ReactNode;
  cite?: string;
  className?: string;
}

export function Blockquote({ children, cite, className = '' }: BlockquoteProps) {
  return (
    <blockquote className={`${styles.blockquote} ${className}`} cite={cite}>
      {children}
    </blockquote>
  );
}
