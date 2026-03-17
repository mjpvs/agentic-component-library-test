import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    logo: 'My Blog',
  },
};

export const WithNavigation: Story = {
  args: {
    logo: 'My Blog',
    navigation: (
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    ),
  },
};

export const LogoOnly: Story = {
  args: {
    logo: <strong>My Website</strong>,
  },
};
