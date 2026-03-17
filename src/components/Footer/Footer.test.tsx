import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders footer element', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders default copyright with current year', () => {
    render(<Footer />);
    const year = new Date().getFullYear();
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument();
  });

  it('renders custom copyright', () => {
    render(<Footer copyright="Custom Copyright 2024" />);
    expect(screen.getByText('Custom Copyright 2024')).toBeInTheDocument();
  });

  it('renders navigation when provided', () => {
    render(<Footer navigation={<a href="/test">Link</a>} />);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('applies custom className', () => {
    render(<Footer className="custom-class" />);
    expect(screen.getByRole('contentinfo')).toHaveClass('custom-class');
  });
});
