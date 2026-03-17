import { Card } from '../../layout/Card/Card';
import { Heading } from '../../display/Heading/Heading';
import { Image } from '../../media/Image/Image';
import { Meta } from '../Meta/Meta';
import { TagList } from '../../navigation/TagList/TagList';
import styles from './ArticleCard.module.css';

export interface ArticleCardProps {
  title: string;
  excerpt?: string;
  href: string;
  image?: {
    src: string;
    alt: string;
  };
  date?: string | Date;
  author?: string;
  readingTime?: number;
  tags?: Array<{ children: React.ReactNode; href?: string }>;
  className?: string;
}

export function ArticleCard({
  title,
  excerpt,
  href,
  image,
  date,
  author,
  readingTime,
  tags,
  className = '',
}: ArticleCardProps) {
  return (
    <Card className={`${styles.card} ${className}`}>
      {image && (
        <a href={href} className={styles.imageLink}>
          <Image src={image.src} alt={image.alt} className={styles.image} />
        </a>
      )}
      <div className={styles.content}>
        <Heading level={3} className={styles.title}>
          <a href={href} className={styles.titleLink}>
            {title}
          </a>
        </Heading>
        {(date || author || readingTime) && (
          <Meta
            date={date}
            author={author}
            readingTime={readingTime}
            className={styles.meta}
          />
        )}
        {excerpt && <p className={styles.excerpt}>{excerpt}</p>}
        {tags && tags.length > 0 && <TagList tags={tags} className={styles.tags} />}
      </div>
    </Card>
  );
}
