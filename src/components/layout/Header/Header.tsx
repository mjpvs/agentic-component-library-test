import { Flex } from '../../Flex/Flex';
import styles from './Header.module.css';

export interface HeaderProps {
  logo?: React.ReactNode;
  navigation?: React.ReactNode;
  className?: string;
}

export function Header({ logo, navigation, className = '' }: HeaderProps) {
  return (
    <header className={`${styles.header} ${className}`}>
      <nav className={styles.inner}>
        <Flex
          align="center"
          justify="between"
        >
          {logo && <div className={styles.logo}>{logo}</div>}
          {navigation && <div className={styles.nav}>{navigation}</div>}
        </Flex>
      </nav>
    </header>
  );
}
