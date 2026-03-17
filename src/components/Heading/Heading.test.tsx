import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Heading } from './Heading';

describe('Heading', () => {
  it('renders with default level h1', () => {
    render(<Heading>Hello</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Hello');
  });

  it('renders with specified level', () => {
    render(<Heading level={3}>Level 3</Heading>);
    const heading = screen.getByRole('heading', { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Level 3');
  });

  it('renders all heading levels', () => {
    for (let level = 1; level <= 6; level++) {
      render(<Heading level={level as 1 | 2 | 3 | 4 | 5 | 6}>Level {level}</Heading>);
      const heading = screen.getByRole('heading', { level });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent(`Level ${level}`);
    }
  });

  it('applies custom className', () => {
    render(<Heading className="custom-class">Custom</Heading>);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveClass('custom-class');
  });

  it('renders children correctly', () => {
    render(
      <Heading>
        <span>Child element</span>
      </Heading>
    );
    expect(screen.getByText('Child element')).toBeInTheDocument();
  });
});
