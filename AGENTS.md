<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## TypeScript standard

- Use modern TypeScript and TSX for application and configuration code.
- Use strict typing, ECMAScript modules (`import`/`export`), `const` and `let`, async/await, and current React and Next.js patterns.
- Prefer inference where types are obvious; avoid `any`, unsafe assertions, and unnecessary legacy abstractions.
- Do not introduce CommonJS, `var`, jQuery, legacy React class components, or obsolete browser compatibility patterns.
