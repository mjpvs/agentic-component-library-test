import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    currentPage: 1,
    totalPages: 5,
    getPageUrl: (page) => `?page=${page}`,
  },
};

export const MiddlePage: Story = {
  args: {
    currentPage: 3,
    totalPages: 10,
    getPageUrl: (page) => `/page/${page}`,
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 5,
    totalPages: 5,
    getPageUrl: (page) => `?page=${page}`,
  },
};

export const ManyPages: Story = {
  args: {
    currentPage: 7,
    totalPages: 20,
    getPageUrl: (page) => `?page=${page}`,
  },
};
