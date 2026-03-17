import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Tag } from './Tag';

describe('Tag', () => {
  it('renders tag with children', () => {
    render(<Tag>React</Tag>);
    expect(screen.getByText('React')).toBeInTheDocument();
  });

  it('renders as span when no href', () => {
    render(<Tag>Tag</Tag>);
    expect(screen.getByText('Tag').tagName).toBe('SPAN');
  });

  it('renders as anchor when href provided', () => {
    render(<Tag href="/tag">Tag</Tag>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/tag');
  });

  it('applies custom className', () => {
    render(<Tag className="custom-class">Tag</Tag>);
    expect(screen.getByText('Tag')).toHaveClass('custom-class');
  });
});
