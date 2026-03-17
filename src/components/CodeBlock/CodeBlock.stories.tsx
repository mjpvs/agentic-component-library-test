import type { Meta, StoryObj } from '@storybook/react';
import { CodeBlock } from './CodeBlock';

const meta: Meta<typeof CodeBlock> = {
  title: 'Content/CodeBlock',
  component: CodeBlock,
  tags: ['autodocs'],
  argTypes: {
    language: {
      control: { type: 'select' },
      options: ['javascript', 'typescript', 'python', 'html', 'css', 'json'],
    },
    showLineNumbers: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

export const Default: Story = {
  args: {
    code: 'const hello = "world";\nconsole.log(hello);',
  },
};

export const WithLanguage: Story = {
  args: {
    code: 'function greet(name: string): string {\n  return `Hello, ${name}!`;\n}',
    language: 'typescript',
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: 'line one\nline two\nline three',
    showLineNumbers: true,
  },
};

export const Python: Story = {
  args: {
    code: 'def hello():\n    print("Hello, World!")',
    language: 'python',
  },
};
