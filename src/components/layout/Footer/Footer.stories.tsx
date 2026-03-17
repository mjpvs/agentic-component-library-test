import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';

const meta: Meta<typeof Footer> = {
  title: 'Layout/Footer',
  component: Footer,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  args: {},
};

export const WithCustomCopyright: Story = {
  args: {
    copyright: '© 2024 My Company. All rights reserved.',
  },
};

export const WithNavigation: Story = {
  args: {
    navigation: (
      <nav>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
      </nav>
    ),
  },
};
