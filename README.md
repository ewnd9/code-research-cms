# `code-research-cms`

A monorepo for CMS research and React experiments.

## Structure

### Starters
- `vite-rsc`
- `react-router-data-rsc`
- `react-router-framework-rsc`
- `tanstack-start-rsc`

### Projects
- `claude-hono-vite-rsc` - Original implementation

### Monorepo
- **apps/admin** - Admin application with React, Vite, and Hono API
- **packages/core** - Database and Drizzle ORM (`@cms/core`)
- **packages/blocks** - Reusable block components (`@cms/blocks`)

## Getting Started

### Install Dependencies

```bash
bun install
```

### Development

Run the Vite dev server (frontend on port 3000):

```bash
bun dev
```

Run the Hono API server (backend on port 3002):

```bash
bun api
```

You'll need both servers running for the full application.

### Build

```bash
bun build
```

### Preview Production Build

```bash
bun preview
```

## Monorepo Packages

### @cms/core

Core database functionality using Drizzle ORM and Bun's SQLite driver.

**Exports:**
- Database schema (pages, blocks)
- Type definitions (Page, Block, PageWithBlocks, etc.)
- Database operations (getPages, getPageBySlug, createPage, etc.)

### @cms/blocks

Reusable React block components for the CMS.

**Available Blocks:**
- Jumbotron - Hero section with background image
- Call to Action (CTA) - Action prompt with button
- SEO Listing - Grid of items with images and links
- Gallery - Image gallery with captions

**Exports:**
- BlockRenderer - Universal component for rendering blocks
- blockRegistry - Registry of all available blocks
- Type definitions for each block

### @cms/admin

Admin application built with React, Vite, and Hono.

**Features:**
- Visual page builder with live preview
- Block-based content management
- RESTful API with OpenAPI documentation
- Drag-and-drop block ordering
- Form-based block editing

**Tech Stack:**
- Frontend: React 19, React Router, Vite, Tailwind CSS
- Backend: Hono, Bun runtime
- Database: SQLite with Drizzle ORM

## API Documentation

Start the API server and visit:
- API Docs (Swagger): http://localhost:3002/api/docs
- OpenAPI JSON: http://localhost:3002/api/openapi.json

