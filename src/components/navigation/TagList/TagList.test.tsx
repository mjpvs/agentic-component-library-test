import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TagList } from './TagList';

describe('TagList', () => {
  it('renders tags', () => {
    render(<TagList tags={[{ children: 'React' }, { children: 'Vue' }]} />);
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Vue')).toBeInTheDocument();
  });

  it('renders empty when no tags', () => {
    const { container } = render(<TagList tags={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it('renders tags with href', () => {
    render(<TagList tags={[{ children: 'React', href: '/react' }]} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/react');
  });

  it('applies custom className', () => {
    render(<TagList tags={[{ children: 'Tag' }]} className="custom-class" />);
    expect(screen.getByText('Tag').parentElement).toHaveClass('custom-class');
  });
});
