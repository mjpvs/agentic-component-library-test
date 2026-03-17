import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Media/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    objectFit: {
      control: { type: 'select' },
      options: ['contain', 'cover', 'fill', 'none', 'scale-down'],
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Sample image',
  },
};

export const WithCaption: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Sample image with caption',
    caption: 'This is a sample caption for the image',
  },
};

export const LazyLoading: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Lazy loaded image',
    loading: 'lazy',
  },
};

export const CustomSize: Story = {
  args: {
    src: 'https://picsum.photos/800/450',
    alt: 'Custom sized image',
    width: 400,
    height: 300,
  },
};
