import styles from './Link.module.css';

export interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  showExternalIcon?: boolean;
}

function isExternal(href: string): boolean {
  return href.startsWith('http') || href.startsWith('//');
}

export function Link({
  href,
  children,
  className = '',
  showExternalIcon = true,
}: LinkProps) {
  const external = isExternal(href);

  return (
    <a
      href={href}
      className={`${styles.link} ${className}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
      {external && showExternalIcon && (
        <span className={styles.icon} aria-hidden="true">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </span>
      )}
    </a>
  );
}
