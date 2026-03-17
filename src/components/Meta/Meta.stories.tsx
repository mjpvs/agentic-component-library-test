import type { Meta as StorybookMeta, StoryObj } from '@storybook/react';
import { Meta } from './Meta';

const meta: StorybookMeta<typeof Meta> = {
  title: 'Content/Meta',
  component: Meta,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Meta>;

export const DateOnly: Story = {
  args: {
    date: '2024-01-15',
  },
};

export const DateAndAuthor: Story = {
  args: {
    date: '2024-01-15',
    author: 'John Doe',
  },
};

export const Full: Story = {
  args: {
    date: '2024-01-15',
    author: 'Jane Smith',
    readingTime: 5,
  },
};

export const ReadingTimeOnly: Story = {
  args: {
    readingTime: 10,
  },
};
