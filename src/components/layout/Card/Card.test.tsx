import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders card with children', () => {
    render(<Card>Card content</Card>);
    expect(screen.getByText('Card content')).toBeInTheDocument();
  });

  it('renders card with title', () => {
    render(<Card title="Card Title">Content</Card>);
    expect(screen.getByText('Card Title')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders card without title', () => {
    render(<Card>Only content</Card>);
    expect(screen.getByText('Only content')).toBeInTheDocument();
  });

  it('renders with different padding options', () => {
    const paddings = ['none', 'small', 'medium', 'large'] as const;

    paddings.forEach((padding) => {
      const { unmount } = render(<Card padding={padding}>Content</Card>);
      expect(screen.getByText('Content')).toBeInTheDocument();
      unmount();
    });
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Content</Card>);
    const card = document.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });

  it('renders nested elements as children', () => {
    render(
      <Card>
        <h3>Title</h3>
        <p>Paragraph</p>
      </Card>
    );
    expect(screen.getByText('Title')).toBeInTheDocument();
    expect(screen.getByText('Paragraph')).toBeInTheDocument();
  });

  it('renders with title and nested children', () => {
    render(
      <Card title="My Card">
        <span>Child 1</span>
        <span>Child 2</span>
      </Card>
    );
    expect(screen.getByText('My Card')).toBeInTheDocument();
    expect(screen.getByText('Child 1')).toBeInTheDocument();
    expect(screen.getByText('Child 2')).toBeInTheDocument();
  });
});
