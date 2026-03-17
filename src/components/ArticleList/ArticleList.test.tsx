import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleList } from './ArticleList';

describe('ArticleList', () => {
  const articles = [
    { title: 'Article 1', href: '/1', excerpt: 'Excerpt 1' },
    { title: 'Article 2', href: '/2', excerpt: 'Excerpt 2' },
    { title: 'Article 3', href: '/3', excerpt: 'Excerpt 3' },
  ];

  it('renders articles', () => {
    render(<ArticleList articles={articles} />);
    expect(screen.getByText('Article 1')).toBeInTheDocument();
    expect(screen.getByText('Article 2')).toBeInTheDocument();
    expect(screen.getByText('Article 3')).toBeInTheDocument();
  });

  it('renders empty when no articles', () => {
    const { container } = render(<ArticleList articles={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
