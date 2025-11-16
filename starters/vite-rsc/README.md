# Vite + RSC

- [Fork commit](https://github.com/vitejs/vite-plugin-react/blob/2994900a697edcc5b251f7beed3104601780228d/packages/plugin-rsc/examples/starter/package.json)

## Usage

```sh
$ bun dev
$ bun build
$ bun preview
```

## API usage

See [`@vitejs/plugin-rsc`](https://github.com/vitejs/vite-plugin-react/tree/main/packages/plugin-rsc) for the documentation.

- [`vite.config.ts`](./vite.config.ts)
  - `@vitejs/plugin-rsc/plugin`
- [`./src/framework/entry.rsc.tsx`](./src/framework/entry.rsc.tsx)
  - `@vitejs/plugin-rsc/rsc`
  - `import.meta.viteRsc.loadModule`
- [`./src/framework/entry.ssr.tsx`](./src/framework/entry.ssr.tsx)
  - `@vitejs/plugin-rsc/ssr`
  - `import.meta.viteRsc.loadBootstrapScriptContent`
  - `rsc-html-stream/server`
- [`./src/framework/entry.browser.tsx`](./src/framework/entry.browser.tsx)
  - `@vitejs/plugin-rsc/browser`
  - `rsc-html-stream/client`

## Notes

- [`./src/framework/entry.{browser,rsc,ssr}.tsx`](./src/framework) (with inline comments) provides an overview of how low level RSC (React flight) API can be used to build RSC framework.
- You can use [`vite-plugin-inspect`](https://github.com/antfu-collective/vite-plugin-inspect) to understand how `"use client"` and `"use server"` directives are transformed internally.

