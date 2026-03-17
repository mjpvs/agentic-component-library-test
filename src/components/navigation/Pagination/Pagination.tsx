import { Flex } from '../../Flex/Flex';
import styles from './Pagination.module.css';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  getPageUrl: (page: number) => string;
  className?: string;
}

function getPageNumbers(currentPage: number, totalPages: number): (number | '...')[] {
  const pages: (number | '...')[] = [];
  const showPages = 5;

  if (totalPages <= showPages + 2) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);

    if (currentPage > 3) {
      pages.push('...');
    }

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push('...');
    }

    pages.push(totalPages);
  }

  return pages;
}

export function Pagination({
  currentPage,
  totalPages,
  getPageUrl,
  className = '',
}: PaginationProps) {
  if (totalPages <= 1) {
    return null;
  }

  const pages = getPageNumbers(currentPage, totalPages);

  return (
    <Flex align="center" justify="center" gap="xs" className={`${styles.pagination} ${className}`}>
      {currentPage > 1 && (
        <a href={getPageUrl(currentPage - 1)} className={styles.arrow}>
          ← Previous
        </a>
      )}
      {pages.map((page, index) => (
        page === '...' ? (
          <span key={`ellipsis-${index}`} className={styles.ellipsis}>…</span>
        ) : (
          <a
            key={page}
            href={getPageUrl(page)}
            className={`${styles.page} ${page === currentPage ? styles.active : ''}`}
          >
            {page}
          </a>
        )
      ))}
      {currentPage < totalPages && (
        <a href={getPageUrl(currentPage + 1)} className={styles.arrow}>
          Next →
        </a>
      )}
    </Flex>
  );
}
