import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Meta, calculateReadingTimeFromHtml } from './index';

describe('Meta', () => {
  it('renders date when provided', () => {
    render(<Meta date="2024-01-15" />);
    expect(screen.getByText(/January 15, 2024/)).toBeInTheDocument();
  });

  it('renders author when provided', () => {
    render(<Meta author="John Doe" />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  it('renders reading time when provided', () => {
    render(<Meta readingTime={5} />);
    expect(screen.getByText('5 min read')).toBeInTheDocument();
  });

  it('renders singular minute read', () => {
    render(<Meta readingTime={1} />);
    expect(screen.getByText('1 min read')).toBeInTheDocument();
  });

  it('renders all meta items together', () => {
    render(<Meta date="2024-01-15" author="Jane" readingTime={3} />);
    expect(screen.getByText(/January 15, 2024/)).toBeInTheDocument();
    expect(screen.getByText('Jane')).toBeInTheDocument();
    expect(screen.getByText('3 min read')).toBeInTheDocument();
  });

  it('returns null when no props provided', () => {
    const { container } = render(<Meta />);
    expect(container.firstChild).toBeNull();
  });
});

describe('calculateReadingTimeFromHtml', () => {
  it('calculates reading time from HTML', () => {
    const html = '<p>' + 'word '.repeat(200) + '</p>';
    expect(calculateReadingTimeFromHtml(html)).toBe(1);
  });

  it('returns 1 for string that becomes empty after stripping tags', () => {
    expect(calculateReadingTimeFromHtml('<p></p>')).toBe(1);
  });
});
