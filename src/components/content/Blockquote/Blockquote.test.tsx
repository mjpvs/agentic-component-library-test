import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Blockquote } from './Blockquote';

describe('Blockquote', () => {
  it('renders blockquote with children', () => {
    render(<Blockquote>Test quote</Blockquote>);
    expect(screen.getByText('Test quote')).toBeInTheDocument();
  });

  it('renders with cite attribute', () => {
    render(<Blockquote cite="https://example.com">Quote</Blockquote>);
    const blockquote = document.querySelector('blockquote');
    expect(blockquote).toHaveAttribute('cite', 'https://example.com');
  });

  it('applies custom className', () => {
    render(<Blockquote className="custom-class">Quote</Blockquote>);
    const blockquote = document.querySelector('blockquote');
    expect(blockquote).toHaveClass('custom-class');
  });
});
