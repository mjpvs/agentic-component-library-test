import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from './Blockquote';

const meta: Meta<typeof Blockquote> = {
  title: 'Content/Blockquote',
  component: Blockquote,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
  args: {
    children: 'This is a blockquote with some important text.',
  },
};

export const WithCite: Story = {
  args: {
    children: 'The only way to do great work is to love what you do.',
    cite: 'https://example.com',
  },
};
