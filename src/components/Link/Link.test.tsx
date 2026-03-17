import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Link } from './Link';

describe('Link', () => {
  it('renders link with children', () => {
    render(<Link href="/test">Test Link</Link>);
    expect(screen.getByRole('link')).toBeInTheDocument();
    expect(screen.getByText('Test Link')).toBeInTheDocument();
  });

  it('renders with correct href', () => {
    render(<Link href="https://example.com">Example</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('href', 'https://example.com');
  });

  it('opens external links in new tab', () => {
    render(<Link href="https://example.com">External</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('target', '_blank');
  });

  it('adds rel for external links', () => {
    render(<Link href="https://example.com">External</Link>);
    expect(screen.getByRole('link')).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('does not open internal links in new tab', () => {
    render(<Link href="/about">Internal</Link>);
    expect(screen.getByRole('link')).not.toHaveAttribute('target');
  });

  it('applies custom className', () => {
    render(<Link href="/test" className="custom-class">Link</Link>);
    expect(screen.getByRole('link')).toHaveClass('custom-class');
  });
});
