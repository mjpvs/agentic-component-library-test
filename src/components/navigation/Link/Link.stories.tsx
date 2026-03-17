import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';

const meta: Meta<typeof Link> = {
  title: 'Navigation/Link',
  component: Link,
  tags: ['autodocs'],
  argTypes: {
    showExternalIcon: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Internal: Story = {
  args: {
    href: '/about',
    children: 'Internal Link',
    showExternalIcon: false,
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Link',
  },
};

export const WithoutIcon: Story = {
  args: {
    href: 'https://example.com',
    children: 'External Without Icon',
    showExternalIcon: false,
  },
};
