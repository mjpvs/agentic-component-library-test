import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

const meta: Meta<typeof Tag> = {
  title: 'Navigation/Tag',
  component: Tag,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: 'React',
  },
};

export const WithLink: Story = {
  args: {
    children: 'JavaScript',
    href: '/tags/javascript',
  },
};
