# React Component Library

A modern React component library built with TypeScript, Storybook, and Vitest. Generated entirely agentically as a learning experiment to explore automated component library creation.

## Features

- **Component Library** - Collection of reusable React components
- **Design Tokens** - Centralized design system with colors, typography, spacing, and more
- **Storybook** - Component documentation and visual testing
- **Vitest** - Fast unit testing with React Testing Library
- **Semantic Release** - Automated versioning and npm publishing
- **Conventional Commits** - Enforced commit message format

## Available Scripts

```bash
# Development
npm run dev              # Start Vite dev server
npm run storybook        # Start Storybook on port 6006

# Building
npm run build            # Build library (tokens + bundle + types)
npm run build:tokens     # Generate design tokens only
npm run build-storybook  # Build static Storybook

# Testing
npm test                # Run tests in watch mode
npm test run            # Run tests once

# Publishing
npm run commit          # Interactive commit (commitizen)
npm run release         # Run semantic-release (manual)
```

## Components

### Layout
- `Box` - Base container component
- `Flex` - Flexible layout with direction, justify, align, gap
- `Grid` - 12-column grid system with span and start props
- `Container` - Responsive max-width container

### UI
- `Button` - Primary, secondary, outline variants; small, medium, large sizes
- `Card` - Content container with optional title and padding
- `Heading` - Levels 1-6

### Media
- `Video` - YouTube embed with aspect ratio options

## Design Tokens

Tokens are defined in `tokens/design-tokens.json` and generate CSS variables in `src/tokens/_variables.css`.

Categories:
- Colors (primary, gray, white, black)
- Typography (family, size, weight, line-height)
- Spacing
- Border radius
- Shadows
- Transitions

## Publishing

The project uses semantic-release for automatic versioning:

1. Create a commit with a conventional commit message:
   ```bash
   npm run commit
   # Or: git commit -m "feat: add new component"
   ```

2. Push to main branch
3. CI/CD runs tests and publishes to npm

## Tech Stack

- React 18+
- TypeScript 5+
- Vite
- Storybook 8
- Vitest
- CSS Modules
- Style Dictionary
- Semantic Release

## License

MIT
