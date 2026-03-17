import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { RichText } from './RichText';

describe('RichText', () => {
  it('renders HTML content', () => {
    render(<RichText html="<p>Test paragraph</p>" />);
    expect(screen.getByText('Test paragraph')).toBeInTheDocument();
  });

  it('renders multiple paragraphs', () => {
    render(<RichText html="<p>First</p><p>Second</p>" />);
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });

  it('replaces anchor tags with Link component', () => {
    render(<RichText html='<a href="https://example.com">Link</a>' />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', 'https://example.com');
    expect(link).toHaveTextContent('Link');
  });

  it('replaces img tags with Image component', () => {
    render(<RichText html='<img src="/test.jpg" alt="Test" />' />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveAttribute('alt', 'Test');
  });

  it('replaces pre/code with CodeBlock', () => {
    render(<RichText html="<pre><code>code here</code></pre>" />);
    expect(screen.getByText('code here')).toBeInTheDocument();
  });

  it('replaces blockquote with Blockquote component', () => {
    render(<RichText html="<blockquote>Quote</blockquote>" />);
    expect(screen.getByText('Quote')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(<RichText html="<p>Test</p>" className="custom-class" />);
    const container = screen.getByText('Test').parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('renders headings', () => {
    render(<RichText html="<h1>Heading 1</h1><h2>Heading 2</h2>" />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Heading 1');
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Heading 2');
  });

  it('renders lists', () => {
    render(<RichText html="<ul><li>Item 1</li><li>Item 2</li></ul>" />);
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
  });
});
