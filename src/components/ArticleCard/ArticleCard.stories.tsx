import type { Meta, StoryObj } from '@storybook/react';
import { ArticleCard } from './ArticleCard';

const meta: Meta<typeof ArticleCard> = {
  title: 'Content/ArticleCard',
  component: ArticleCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ArticleCard>;

export const Default: Story = {
  args: {
    title: 'Getting Started with React',
    excerpt: 'Learn how to build modern web applications with React.',
    href: '/posts/getting-started',
  },
};

export const Full: Story = {
  args: {
    title: 'Building a Blog with Next.js',
    excerpt: 'A comprehensive guide to building a blog from scratch.',
    href: '/posts/building-blog',
    image: {
      src: 'https://picsum.photos/800/450',
      alt: 'Blog cover',
    },
    date: '2024-01-15',
    author: 'John Doe',
    readingTime: 8,
    tags: [
      { children: 'React', href: '/tags/react' },
      { children: 'Next.js', href: '/tags/nextjs' },
    ],
  },
};

export const NoImage: Story = {
  args: {
    title: 'Article Without Image',
    excerpt: 'This card has no featured image.',
    href: '/posts/no-image',
    date: '2024-02-01',
  },
};
