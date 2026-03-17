import type { Meta, StoryObj } from '@storybook/react';
import { RichText } from './RichText';

const meta: Meta<typeof RichText> = {
  title: 'Display/RichText',
  component: RichText,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof RichText>;

export const Default: Story = {
  args: {
    html: '<p>This is a paragraph with some text.</p>',
  },
};

export const WithLink: Story = {
  args: {
    html: '<p>Check out <a href="https://example.com">this link</a> for more info.</p>',
  },
};

export const WithImage: Story = {
  args: {
    html: '<p>Here is an image:</p><img src="https://picsum.photos/400/300" alt="Sample" />',
  },
};

export const WithVideo: Story = {
  args: {
    html: '<p>Watch this video:</p><video src="https://www.youtube.com/watch?v=dQw4w9WgXcQ" title="Video"></video>',
  },
};

export const WithCode: Story = {
  args: {
    html: '<pre><code class="language-javascript">const x = 42;</code></pre>',
  },
};

export const WithBlockquote: Story = {
  args: {
    html: '<blockquote cite="https://example.com">This is a quoted text.</blockquote>',
  },
};

export const Complex: Story = {
  args: {
    html: `
      <h1>Blog Post Title</h1>
      <p>This is the <strong>introduction</strong> paragraph.</p>
      <h2>Section One</h2>
      <p>Here's a <a href="/about">link</a> and an image:</p>
      <img src="https://picsum.photos/600/400" alt="Blog featured image" />
      <blockquote>The important quote goes here.</blockquote>
      <pre><code class="language-javascript">console.log("Hello!");</code></pre>
    `,
  },
};
