# Design Spec: Supabase Product Integration & Modularization

## Overview
This document outlines the design and plan for modularizing the React codebase of the **hdiasahan** SPA. It breaks down the current monolithic `src/App.tsx` into a clean component-and-page structure and implements dynamic product catalog fetching from Supabase using a React Custom Hook (`useProducts`).

## Architecture & Reorganization
We will transition from a single monolithic file to a clean, decoupled architecture:

```
src/
├── main.tsx
├── App.tsx             # Main router & app container (minimal routing shell)
├── index.css
├── App.css
├── lib/
│   └── supabase.ts     # Supabase client initializer
├── hooks/
│   └── useProducts.ts  # Custom hook for database fetching
├── components/
│   └── Navbar.tsx      # Site navigation component
└── pages/
    ├── Home.tsx        # Landing page
    ├── Products.tsx    # Product catalog with Supabase fetch
    ├── Certificates.tsx # Certificate validation
    ├── Opportunity.tsx # Business opportunity page
    ├── Scanner.tsx     # QR code scanner for tickets
    └── Ticket.tsx      # Ticket verification results
```

---

## Component & Hook Specifications

### 1. `src/hooks/useProducts.ts`
This custom hook will manage the loading, error, and data fetching states for the product catalog from Supabase.

* **Interface:**
  ```typescript
  export interface Product {
    id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
    category: string | null;
    created_at: string;
  }
  ```

* **Hook API:**
  - `products`: `Product[]`
  - `loading`: `boolean`
  - `error`: `string | null`
  - `refetch`: `() => Promise<void>`

---

### 2. `src/pages/Products.tsx`
Displays the products fetched from Supabase.
* Uses the `useProducts` custom hook.
* Implements a **Skeleton Loader** using Tailwind's `animate-pulse` class for smoother transition states.
* Implements an **Error Display** with a "Try Again" / "Retry" button.
* Formats currency as Indonesian Rupiah (IDR).

---

### 3. `src/App.tsx` (Router Shell)
* All core page definitions currently in `src/App.tsx` will be moved to their corresponding files in `src/pages/` and `src/components/`.
* `src/App.tsx` will act as a thin routing wrapper using `HashRouter` to render appropriate pages:
  ```typescript
  import { HashRouter, Routes, Route } from 'react-router-dom'
  import Navbar from './components/Navbar'
  import Home from './pages/Home'
  import Products from './pages/Products'
  // ...other imports
  ```

---

## Branding & Aesthetics
* **Theme & Colors:** PT. Harmoni Dinamik Indonesia (HDI) branding uses red colors as its core identity. While we modularize, we will keep the current UI/UX structure and note that color variables can be customized to match HDI's corporate colors (shades of red/orange/yellow) rather than default blues.
* **Animations:** We will preserve all `framer-motion` animations during the migration to ensure high visual quality.

---

## Verification Plan
1. **Compilation Check:** Run `npm run lint` and `npm run build` to verify there are no TypeScript or bundling issues.
2. **Execution Check:** Run local development server (`npm run dev`) and test navigating between different pages.
3. **Database Integration Check:** Verify products are dynamically loaded from Supabase and show appropriate skeleton loading states.
