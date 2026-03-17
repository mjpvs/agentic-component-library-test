import { Flex } from '../../Flex/Flex';
import styles from './Footer.module.css';

export interface FooterProps {
  copyright?: string;
  navigation?: React.ReactNode;
  className?: string;
}

export function Footer({ copyright, navigation, className = '' }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={`${styles.footer} ${className}`}>
      <nav className={styles.inner}>
        <Flex
          align="center"
          justify="between"
          gap="md"
        >
          {navigation && <div className={styles.nav}>{navigation}</div>}
          <div className={styles.copyright}>
            {copyright || `© ${year} All rights reserved.`}
          </div>
        </Flex>
      </nav>
    </footer>
  );
}
