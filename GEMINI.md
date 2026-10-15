# hdiasahan (Blogger SPA) - Hermes Agent Guide

A dynamic public-facing website for **hdiasahan** built with modern web technologies and optimized for hosting on **Blogger**. Optimized for execution and maintenance with **Hermes Agent**.

## Project Overview
- **Framework:** React with TypeScript & Vite
- **Styling:** Tailwind CSS v4
- **Database:** Neon PostgreSQL (Serverless HTTP Driver)
- **Hosting / Deployment:** 
  - Single-page application (SPA) hosted on Blogger.
  - Bundled as a single HTML file or hosted assets via JSDelivr (`cdn.jsdelivr.net`).
  - Meta Pixel integrated for tracking (ID: `1409312038048592`).

## Hermes Agent Instructions
When working on this codebase with Hermes:
1. **Always verify build before completion:** Run `npm run build` to ensure TypeScript and Vite compile correctly without warnings/errors.
2. **Template synchronization:** Whenever UI assets change, rebuild the project (`npm run build`) and update the `blogger-template.xml` JSDelivr commit hash if deployed via CDN.
3. **Database connection:** Ensure Neon DB queries use the client in `src/lib/neon.ts`. Never hardcode sensitive credentials; use `.env` (ignored by git).

## Development Commands
- **Development Server:**
  ```bash
  npm run dev
  ```
- **Production Build:**
  ```bash
  npm run build
  ```
- **Linting:**
  ```bash
  npm run lint
  ```

## Key Files
- `index.html`: Main HTML template with Meta Pixel integration.
- `blogger-template.xml`: Blogger XML layout template.
- `src/App.tsx`: Main routing and layout component.
- `src/lib/neon.ts`: Neon DB client.
