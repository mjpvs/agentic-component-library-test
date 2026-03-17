import { Flex } from '../Flex/Flex';
import { Tag, TagProps } from '../Tag/Tag';
import styles from './TagList.module.css';

export interface TagListProps {
  tags: TagProps[];
  className?: string;
}

export function TagList({ tags, className = '' }: TagListProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <Flex gap="sm" wrap="wrap" className={`${styles.tagList} ${className}`}>
      {tags.map((tag, index) => (
        <Tag key={index} {...tag}>
          {tag.children}
        </Tag>
      ))}
    </Flex>
  );
}
