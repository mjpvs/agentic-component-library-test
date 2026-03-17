import { Grid } from '../Grid/Grid';
import { ArticleCard, ArticleCardProps } from '../ArticleCard/ArticleCard';
import styles from './ArticleList.module.css';

export interface ArticleListProps {
  articles: ArticleCardProps[];
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

export function ArticleList({
  articles,
  columns = 3,
  className = '',
}: ArticleListProps) {
  if (articles.length === 0) {
    return null;
  }

  return (
    <Grid
      columns={columns}
      gap="lg"
      className={`${styles.articleList} ${className}`}
    >
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </Grid>
  );
}
