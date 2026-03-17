import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CodeBlock } from './CodeBlock';

describe('CodeBlock', () => {
  it('renders code block with content', () => {
    render(<CodeBlock code="const x = 1;" />);
    expect(screen.getByText('const x = 1;')).toBeInTheDocument();
  });

  it('renders with language label', () => {
    render(<CodeBlock code="test" language="javascript" />);
    expect(screen.getByText('javascript')).toBeInTheDocument();
  });

  it('does not render language when not provided', () => {
    render(<CodeBlock code="test" />);
    expect(screen.queryByText('javascript')).not.toBeInTheDocument();
  });

  it('renders code in pre element', () => {
    render(<CodeBlock code="test code" />);
    expect(screen.getByText('test code')).toBeInTheDocument();
  });
});
