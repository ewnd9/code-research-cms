# `code-research-cms`

A monorepo for CMS research and React Server Components experiments.

## Structure

### Starters
- `vite-rsc`
- `react-router-data-rsc`
- `react-router-framework-rsc`
- `tanstack-start-rsc`

### Projects
- `claude-hono-vite-rsc` - Original implementation

### Monorepo (New)
- **apps/admin** - Admin application with Hono API and RSC
- **packages/core** - Database and Drizzle ORM (`@cms/core`)
- **packages/blocks** - Reusable block components (`@cms/blocks`)

## Getting Started

```bash
# Install dependencies
bun install

# Run admin app in development
bun dev

# Build admin app
bun build

# Start production server
bun start
```

## Monorepo Packages

### @cms/core
Core database functionality using Drizzle ORM and Bun's SQLite driver.

### @cms/blocks
Reusable block components for the CMS (Jumbotron, CTA, SEO Listing, Gallery).

### @cms/admin
Admin application with visual page builder and API server.

