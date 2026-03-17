# React Component Library - Development Guidelines

## Project Overview

This is a React component library built with TypeScript, following modern React patterns and best practices.

## Tech Stack

- React 18+
- TypeScript 5+
- Vite (build tool)
- CSS Modules or styled-components for styling
- ESLint + Prettier for code quality

## Code Style & Conventions

### General Principles

- Use functional components with hooks exclusively
- Prefer composition over inheritance
- Keep components small and focused (single responsibility)
- Colocate related files (component, tests, styles)
- Use explicit imports over barrel exports for internal modules

### TypeScript

- Enable `strict: true` in tsconfig.json
- Use `interface` for public API types, `type` for unions/internal types
- Avoid `any` - use `unknown` when type is truly unknown
- Prefer `const` assertions for literal types
- Export types alongside components when part of public API

### Naming Conventions

- **Components**: PascalCase (e.g., `Button.tsx`, `Select.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useToggle`, `usePagination`)
- **Utils**: camelCase (e.g., `formatDate.ts`, `validation.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_TIMEOUT`)
- **Files**: kebab-case for non-component files

### Component Structure

```tsx
// 1. Imports (external, then internal)
import { useState, useCallback } from 'react';
import { cn } from '@/utils/cn';

// 2. Types
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

// 3. Component
export function Button({ variant = 'primary', onClick }: ButtonProps) {
  // 4. Hooks
  const [isLoading, setIsLoading] = useState(false);

  // 5. Callbacks
  const handleClick = useCallback(() => {
    setIsLoading(true);
    onClick?.();
  }, [onClick]);

  // 6. Render
  return (
    <button className={cn('btn', `btn-${variant}`)} onClick={handleClick}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
```

## Linting Standards

### ESLint Configuration

- Use `eslint-config-react` or `eslint-config-airbnb`
- Enable `eslint-plugin-react-hooks` for hook rules
- Enable `eslint-plugin-react-refresh` for HMR compatibility
- Configure `eslint-plugin-perfectionist` for sorted imports

### Required Rules

```json
{
  "react/react-in-jsx-scope": "off",
  "react/prop-types": "off",
  "react/display-name": "off",
  "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
}
```

### Prettier Integration

- Use Prettier for all formatting (no conflicting ESLint rules)
- Single quotes for strings (except JSX attributes)
- Trailing commas where valid
- Print width: 100
- Tab width: 2

## Whitespace Rules

### Imports

- Group imports in order: external libs, internal packages, relative imports
- Empty line between import groups
- Sort imports alphabetically within groups

```tsx
import { useState } from 'react';
import { useRouter } from 'next/router';

import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';

import { useAuth } from '../hooks/useAuth';
import { formatDate } from '../utils/date';
```

### JSX

- Self-closing tags must have space before `/>`
- Multi-line props: one prop per line, closing bracket on new line

```tsx
<Button
  variant="primary"
  size="large"
  onClick={handleClick}
>
  Submit
</Button>
```

### Code Blocks

- Empty line before return statements in functions
- Empty line between logical code blocks
- No trailing whitespace

## Component Patterns

### Props

- Use `interface` for component props
- Make optional props explicit with `?`
- Provide sensible defaults where appropriate
- Use `as` casting sparingly

### State

- Use `useState` for simple local state
- Extract complex state logic to custom hooks
- Prefer `useReducer` when state logic is complex
- Memoize expensive computations with `useMemo`
- Memoize callback functions with `useCallback`

### Effects

- Always include dependency arrays
- Use `useEffect` for side effects only
- Clean up subscriptions and timers
- Prefer `useSyncExternalStore` for external subscriptions

### Context

- Create separate contexts for separate concerns
- Use `useContext` with explicit type annotations
- Consider `useReducer` + context for complex state

## Testing

- Use Vitest or Jest with React Testing Library
- Test behavior, not implementation
- Use `user-event` for user interactions
- Include accessibility tests

```tsx
import { render, screen, userEvent } from '@/test';

test('Button calls onClick', async () => {
  const handleClick = vi.fn();
  render(<Button onClick={handleClick}>Click me</Button>);

  await userEvent.click(screen.getByRole('button'));
  expect(handleClick).toHaveBeenCalled();
});
```

## Accessibility (a11y)

- Use semantic HTML elements
- Include ARIA attributes when needed
- Ensure keyboard navigation works
- Test with screen readers
- Maintain color contrast ratios (4.5:1 minimum)

## Performance

- Use `React.memo` for expensive components
- Implement virtualization for long lists
- Lazy load components with `React.lazy`
- Avoid inline functions in JSX props
- Use `willChange` sparingly

## Git Conventions

- Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`
- Keep commits atomic and small
- Write descriptive commit messages
- Reference issues in commit body

## Build & Release

- Use semantic versioning
- Generate changelog automatically
- Build ESM and CJS bundles
- Include TypeScript declarations
- Publish to npm with proper access

## File Organization

```
src/
├── components/
│   └── Button/
│       ├── Button.tsx
│       ├── Button.module.css
│       ├── Button.test.tsx
│       ├── Button.stories.tsx
│       └── index.ts
├── hooks/
├── utils/
├── types/
└── index.ts
```

## Common Patterns to Avoid

- `class` components (use functional components)
- `defaultProps` (use default parameter values)
- Inline object styles (use CSS modules or styled-components)
- Magic numbers (use named constants)
- Hardcoded strings (use constants or i18n)
