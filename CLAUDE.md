# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

See also `AGENTS.md` (Astro-generated agent notes and doc links).

## Project

Static Astro 7 site (no UI framework integrations, no extra deps) documenting a 2026 Amsterdam trip: collections/rankings, photos, videos, quotes. Site content is written in German. Node >= 22.23.4.

## Commands

- Dev server: `npx astro dev --background` (manage with `astro dev stop|status|logs`); default `localhost:4321`
- Build: `npm run build` (outputs to `dist/`); preview: `npm run preview`
- No test suite or linter is configured. `astro check` needs `@astrojs/check` installed first.

## Architecture

- `src/layouts/MainLayout.astro` is the single page shell: full `<html>` document, `src/assets/grid.svg` as fixed body background (treat it as final, don't edit it), and a CSS grid of sticky navbar / content / footer. Every page wraps its content in `<MainLayout>`.
- Design: weed theme, handwritten fonts (Caveat Brush for headings, Patrick Hand for body) loaded via Astro's Fonts API in `astro.config.mjs`. Every color is a CSS variable in `src/assets/styles/global.css`; never hardcode colors elsewhere. `.glass` there is the shared glass material (blur plus an SVG refraction filter defined in `MainLayout`), and `.paper` is the content card used together with it.
- `src/components/Navbar.astro` links to `/collections`, `/pictures`, `/videos`, `/quotes`. Only `/collections` exists so far; `/rankings` exists but isn't linked.
- Markdown content lives in `src/components/md/` and is imported directly as a component (`import FoodRanking from "../components/md/food-ranking.md"`), then styled from the importing page via `.prose :global(...)` selectors. No content collections are used.
- `404.astro` and `500.astro` are custom error pages; `500.astro` receives `error` as a prop.

## `example_prj/`

An untouched copy of Astro's blog starter (content collections, `content.config.ts`, BaseHead, RSS). It is reference material only, not part of the site; don't edit it or import from it.
