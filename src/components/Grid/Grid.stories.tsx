import type { Meta, StoryObj } from '@storybook/react';
import { Grid, GridItem } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
  argTypes: {
    columns: {
      control: { type: 'select' },
      options: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    gap: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Grid>;

const GridBox = ({ children }: { children: React.ReactNode }) => (
  <div style={{ padding: '1rem', background: '#e5e7eb', borderRadius: '4px', textAlign: 'center' }}>
    {children}
  </div>
);

export const TwelveColumns: Story = {
  args: {
    columns: 12,
    gap: 'md',
    children: (
      <>
        {Array.from({ length: 12 }, (_, i) => (
          <GridItem key={i}>
            <GridBox>{i + 1}</GridBox>
          </GridItem>
        ))}
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: 'md',
    children: (
      <>
        {Array.from({ length: 8 }, (_, i) => (
          <GridItem key={i}>
            <GridBox>Item {i + 1}</GridBox>
          </GridItem>
        ))}
      </>
    ),
  },
};

export const SpanningColumns: Story = {
  args: {
    columns: 12,
    gap: 'md',
    children: (
      <>
        <GridItem span={8}>
          <GridBox>span-8</GridBox>
        </GridItem>
        <GridItem span={4}>
          <GridBox>span-4</GridBox>
        </GridItem>
        <GridItem span={3}>
          <GridBox>span-3</GridBox>
        </GridItem>
        <GridItem span={6}>
          <GridBox>span-6</GridBox>
        </GridItem>
        <GridItem span={3}>
          <GridBox>span-3</GridBox>
        </GridItem>
      </>
    ),
  },
};

export const WithStartPosition: Story = {
  args: {
    columns: 12,
    gap: 'md',
    children: (
      <>
        <GridItem span={3} start={2}>
          <GridBox>starts at 2</GridBox>
        </GridItem>
        <GridItem span={3} start={8}>
          <GridBox>starts at 8</GridBox>
        </GridItem>
      </>
    ),
  },
};
