import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Components/Layout/Container',
  component: Container,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    size: 'lg',
    children: (
      <div style={{ padding: '1rem', background: '#e5e7eb', borderRadius: '4px' }}>
        Container content (max-width: 1024px)
      </div>
    ),
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const).map((size) => (
        <Container key={size} size={size}>
          <div style={{ padding: '1rem', background: '#e5e7eb', borderRadius: '4px' }}>
            Container {size}
          </div>
        </Container>
      ))}
    </div>
  ),
};
