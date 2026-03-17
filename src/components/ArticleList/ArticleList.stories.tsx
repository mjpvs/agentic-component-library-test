import type { Meta, StoryObj } from '@storybook/react';
import { ArticleList } from './ArticleList';

const meta: Meta<typeof ArticleList> = {
  title: 'Content/ArticleList',
  component: ArticleList,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleList>;

const articles = [
  {
    title: 'Article One',
    excerpt: 'First article excerpt',
    href: '/posts/one',
    date: '2024-01-01',
  },
  {
    title: 'Article Two',
    excerpt: 'Second article excerpt',
    href: '/posts/two',
    date: '2024-01-15',
  },
  {
    title: 'Article Three',
    excerpt: 'Third article excerpt',
    href: '/posts/three',
    date: '2024-02-01',
  },
];

export const Default: Story = {
  args: {
    articles,
  },
};

export const TwoColumns: Story = {
  args: {
    articles,
    columns: 2,
  },
};

export const SingleColumn: Story = {
  args: {
    articles,
    columns: 1,
  },
};
