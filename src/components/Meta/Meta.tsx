import { Flex } from '../Flex/Flex';
import styles from './Meta.module.css';

export interface MetaProps {
  date?: string | Date;
  author?: string;
  readingTime?: number;
  className?: string;
}

function formatDate(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatReadingTime(minutes: number): string {
  return minutes === 1 ? '1 min read' : `${minutes} min read`;
}

export function Meta({
  date,
  author,
  readingTime,
  className = '',
}: MetaProps) {
  const items: React.ReactNode[] = [];

  if (date) {
    items.push(
      <time key="date" dateTime={typeof date === 'string' ? date : date.toISOString()} className={styles.item}>
        {formatDate(date)}
      </time>
    );
  }

  if (author) {
    items.push(<span key="author" className={styles.item}>{author}</span>);
  }

  if (readingTime !== undefined) {
    items.push(<span key="readingTime" className={styles.item}>{formatReadingTime(readingTime)}</span>);
  }

  if (items.length === 0) {
    return null;
  }

  return (
    <Flex gap="sm" align="center" className={`${styles.meta} ${className}`}>
      {items}
    </Flex>
  );
}
