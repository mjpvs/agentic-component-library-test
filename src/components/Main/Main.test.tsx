import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Main } from './Main';

describe('Main', () => {
  it('renders main element', () => {
    render(<Main>Content</Main>);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('renders children', () => {
    render(<Main>Test Content</Main>);
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<Main className="custom-class">Content</Main>);
    expect(screen.getByRole('main')).toHaveClass('custom-class');
  });
});
