import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Image } from './Image';

describe('Image', () => {
  it('renders image with src and alt', () => {
    render(<Image src="/test.jpg" alt="Test image" />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', '/test.jpg');
    expect(img).toHaveAttribute('alt', 'Test image');
  });

  it('renders with caption', () => {
    render(<Image src="/test.jpg" alt="Test" caption="Test caption" />);
    expect(screen.getByText('Test caption')).toBeInTheDocument();
  });

  it('renders figure when caption provided', () => {
    render(<Image src="/test.jpg" alt="Test" caption="Caption" />);
    expect(screen.getByRole('figure')).toBeInTheDocument();
  });

  it('applies custom width and height', () => {
    render(<Image src="/test.jpg" alt="Test" width={200} height={100} />);
    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('width', '200');
    expect(img).toHaveAttribute('height', '100');
  });

  it('applies lazy loading by default', () => {
    render(<Image src="/test.jpg" alt="Test" />);
    expect(screen.getByRole('img')).toHaveAttribute('loading', 'lazy');
  });

  it('allows eager loading', () => {
    render(<Image src="/test.jpg" alt="Test" loading="eager" />);
    expect(screen.getByRole('img')).toHaveAttribute('loading', 'eager');
  });

  it('applies custom className', () => {
    render(<Image src="/test.jpg" alt="Test" className="custom-class" />);
    const figure = document.querySelector('figure');
    expect(figure).toHaveClass('custom-class');
  });
});
