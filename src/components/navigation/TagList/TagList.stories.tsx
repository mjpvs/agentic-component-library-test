import type { Meta, StoryObj } from '@storybook/react';
import { TagList } from './TagList';

const meta: Meta<typeof TagList> = {
  title: 'Navigation/TagList',
  component: TagList,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof TagList>;

export const Default: Story = {
  args: {
    tags: [
      { children: 'React' },
      { children: 'TypeScript' },
      { children: 'Vite' },
    ],
  },
};

export const WithLinks: Story = {
  args: {
    tags: [
      { children: 'React', href: '/tags/react' },
      { children: 'TypeScript', href: '/tags/typescript' },
    ],
  },
};
