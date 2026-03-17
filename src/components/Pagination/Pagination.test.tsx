import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  const getPageUrl = (page: number) => `?page=${page}`;

  it('renders pagination links', () => {
    render(<Pagination currentPage={1} totalPages={5} getPageUrl={getPageUrl} />);
    expect(screen.getByRole('link', { name: '1' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: '2' })).toBeInTheDocument();
  });

  it('renders next link when not on last page', () => {
    render(<Pagination currentPage={1} totalPages={5} getPageUrl={getPageUrl} />);
    expect(screen.getByRole('link', { name: 'Next →' })).toBeInTheDocument();
  });

  it('renders previous link when not on first page', () => {
    render(<Pagination currentPage={2} totalPages={5} getPageUrl={getPageUrl} />);
    expect(screen.getByRole('link', { name: '← Previous' })).toBeInTheDocument();
  });

  it('does not render when only one page', () => {
    const { container } = render(<Pagination currentPage={1} totalPages={1} getPageUrl={getPageUrl} />);
    expect(container.firstChild).toBeNull();
  });

  it('generates correct URLs', () => {
    render(<Pagination currentPage={1} totalPages={5} getPageUrl={getPageUrl} />);
    expect(screen.getByRole('link', { name: '3' })).toHaveAttribute('href', '?page=3');
  });
});
