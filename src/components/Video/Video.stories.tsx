import type { Meta, StoryObj } from '@storybook/react';
import { Video } from './Video';

const meta: Meta<typeof Video> = {
  title: 'Components/Media/Video',
  component: Video,
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: { type: 'select' },
      options: ['16-9', '4-3', '1-1'],
    },
    autoplay: {
      control: 'boolean',
    },
    controls: {
      control: 'boolean',
    },
    loop: {
      control: 'boolean',
    },
    muted: {
      control: 'boolean',
    },
    rel: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
    title: 'Rick Astley - Never Gonna Give You Up',
  },
};

export const AspectRatio_4_3: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
    aspectRatio: '4-3',
    title: 'Video in 4:3 aspect ratio',
  },
};

export const AspectRatio_1_1: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
    aspectRatio: '1-1',
    title: 'Video in 1:1 aspect ratio',
  },
};

export const Autoplay: Story = {
  args: {
    videoId: 'dQw4w9WgXcQ',
    autoplay: true,
    muted: true,
    title: 'Autoplay video',
  },
};
