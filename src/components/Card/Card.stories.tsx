import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Layout/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    padding: {
      control: { type: 'select' },
      options: ['none', 'small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: 'This is a simple card with some content.',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Card Title',
    children: 'This card has a title and some content.',
  },
};

export const SmallPadding: Story = {
  args: {
    padding: 'small',
    children: 'Card with small padding.',
  },
};

export const LargePadding: Story = {
  args: {
    padding: 'large',
    children: 'Card with large padding.',
  },
};

export const NoPadding: Story = {
  args: {
    padding: 'none',
    children: 'Card with no padding.',
  },
};

export const WithButton: Story = {
  args: {
    title: 'Action Card',
    children: (
      <>
        <p>This card contains a button component.</p>
        <Button variant="primary">Click Me</Button>
      </>
    ),
  },
};

export const ComplexCard: Story = {
  render: () => (
    <Card title="Welcome">
      <p>This is a more complex card example with multiple elements.</p>
      <p>You can put any content inside a card.</p>
      <div style={{ marginTop: '1rem' }}>
        <Button variant="secondary" size="small">Learn More</Button>
      </div>
    </Card>
  ),
};
