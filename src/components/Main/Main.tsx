import styles from './Main.module.css';

export interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export function Main({ children, className = '' }: MainProps) {
  return (
    <main className={`${styles.main} ${className}`}>
      {children}
    </main>
  );
}
