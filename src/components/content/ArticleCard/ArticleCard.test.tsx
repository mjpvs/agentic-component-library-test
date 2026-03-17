import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ArticleCard } from './ArticleCard';

describe('ArticleCard', () => {
  it('renders title', () => {
    render(<ArticleCard title="Test Title" href="/test" />);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Test Title');
  });

  it('renders excerpt', () => {
    render(<ArticleCard title="Title" href="/test" excerpt="Test excerpt" />);
    expect(screen.getByText('Test excerpt')).toBeInTheDocument();
  });

  it('renders link with correct href', () => {
    render(<ArticleCard title="Title" href="/posts/test" />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/posts/test');
  });

  it('renders image when provided', () => {
    render(
      <ArticleCard
        title="Title"
        href="/test"
        image={{ src: '/image.jpg', alt: 'Image' }}
      />
    );
    expect(screen.getByRole('img')).toHaveAttribute('src', '/image.jpg');
  });

  it('renders meta when provided', () => {
    render(
      <ArticleCard
        title="Title"
        href="/test"
        date="2024-01-15"
        author="Jane"
        readingTime={5}
      />
    );
    expect(screen.getByText(/January 15, 2024/)).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  it('renders tags when provided', () => {
    render(
      <ArticleCard
        title="Title"
        href="/test"
        tags={[{ children: 'React' }]}
      />
    );
    expect(screen.getByText('React')).toBeInTheDocument();
  });
});
