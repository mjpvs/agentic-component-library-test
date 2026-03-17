import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  it('renders header element', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders logo when provided', () => {
    render(<Header logo="My Logo" />);
    expect(screen.getByText('My Logo')).toBeInTheDocument();
  });

  it('renders navigation when provided', () => {
    render(
      <Header
        navigation={<a href="/test">Link</a>}
      />
    );
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('applies custom className', () => {
    render(<Header className="custom-class" />);
    expect(screen.getByRole('banner')).toHaveClass('custom-class');
  });
});
