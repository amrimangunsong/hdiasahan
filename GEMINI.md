# hdiasahan

A dynamic public-facing website for **hdiasahan** built with modern web technologies and optimized for hosting on **Blogger**.

## Project Overview
This project uses **React** with **Vite** and **Tailwind CSS** to create a responsive and performant user interface. It is designed to be bundled into a single HTML file to overcome the limitations of Blogger's hosting environment. Data is dynamically fetched from **Supabase**, allowing for easy manual data management without editing the website's source code.

### Core Tech Stack
- **Frontend Framework:** React (with TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Database:** Neon PostgreSQL (Serverless HTTP Driver)
- **Build Plugin:** `vite-plugin-singlefile` (for Blogger compatibility)
- **Icons:** Lucide React

## Architecture
- **Public Interface:** A single-page application (SPA) hosted on Blogger.
- **Backend:** Neon PostgreSQL handles the database and provides a serverless HTTP client for data fetching.
- **Deployment:** The build process produces a single `index.html` file containing all CSS and JS, which is then manually pasted into the Blogger Theme XML editor.

## Building and Running
- **Development:**
  ```bash
  npm run dev
  ```
- **Production Build:**
  ```bash
  npm run build
  ```
  The output will be generated in the `dist/index.html` file as a standalone bundle.
- **Linting:**
  ```bash
  npm run lint
  ```

## Development Conventions
- **Blogger Compatibility:** Always use `vite-plugin-singlefile` in `vite.config.ts`. Do not rely on multiple external assets unless they are hosted on a reliable CDN.
- **Data Management:** Product data is stored in Neon PostgreSQL tables. Use the `src/lib/neon.ts` client for all database interactions.
- **Design Specifications:** Detailed design documents and specs are located in `docs/superpowers/specs/`.
- **Styling:** Use Tailwind CSS for all styling needs. Avoid custom CSS files where possible; leverage Tailwind's utility classes.

## Key Files
- `vite.config.ts`: Configuration for Vite, including the single-file bundling plugin.
- `src/App.tsx`: Main application component and routing logic.
- `src/lib/neon.ts`: Neon database client initialization.
- `docs/superpowers/specs/2026-06-18-hdiasahan-design.md`: The official project design document.
