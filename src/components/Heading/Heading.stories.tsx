import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'Components/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Level1: Story = {
  args: {
    level: 1,
    children: 'Heading Level 1',
  },
};

export const Level2: Story = {
  args: {
    level: 2,
    children: 'Heading Level 2',
  },
};

export const Level3: Story = {
  args: {
    level: 3,
    children: 'Heading Level 3',
  },
};

export const AllLevels: Story = {
  render: () => (
    <div>
      <Heading level={1}>Level 1 Heading</Heading>
      <Heading level={2}>Level 2 Heading</Heading>
      <Heading level={3}>Level 3 Heading</Heading>
      <Heading level={4}>Level 4 Heading</Heading>
      <Heading level={5}>Level 5 Heading</Heading>
      <Heading level={6}>Level 6 Heading</Heading>
    </div>
  ),
};
