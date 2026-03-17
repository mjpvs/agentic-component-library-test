import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { Box } from '../Box/Box';

const meta: Meta<typeof Flex> = {
  title: 'Components/Layout/Flex',
  component: Flex,
  tags: ['autodocs'],
  argTypes: {
    direction: {
      control: { type: 'select' },
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
    justify: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
    },
    align: {
      control: { type: 'select' },
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
    },
    gap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    wrap: {
      control: { type: 'select' },
      options: ['nowrap', 'wrap', 'wrap-reverse'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Flex>;

const BoxItem = ({ children }: { children: React.ReactNode }) => (
  <Box style={{ padding: '1rem', background: '#e5e7eb', borderRadius: '4px' }}>{children}</Box>
);

export const Row: Story = {
  args: {
    direction: 'row',
    gap: 'md',
    children: (
      <>
        <BoxItem>Item 1</BoxItem>
        <BoxItem>Item 2</BoxItem>
        <BoxItem>Item 3</BoxItem>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    gap: 'md',
    children: (
      <>
        <BoxItem>Item 1</BoxItem>
        <BoxItem>Item 2</BoxItem>
        <BoxItem>Item 3</BoxItem>
      </>
    ),
  },
};

export const Centered: Story = {
  args: {
    direction: 'row',
    justify: 'center',
    align: 'center',
    gap: 'md',
    style: { height: 200 },
    children: (
      <>
        <BoxItem>Centered</BoxItem>
        <BoxItem>Content</BoxItem>
      </>
    ),
  },
};

export const SpaceBetween: Story = {
  args: {
    direction: 'row',
    justify: 'between',
    gap: 'md',
    children: (
      <>
        <BoxItem>Left</BoxItem>
        <BoxItem>Right</BoxItem>
      </>
    ),
  },
};
