# Supabase Product Integration & Modularization Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clean up the monolithic code structure in `App.tsx` by importing pages/components from their individual files, and integrate the dynamic Supabase product fetching in `src/pages/Products.tsx` using a custom React Hook `useProducts`.

**Architecture:** Create a React Custom Hook (`useProducts`) to isolate the Supabase query, loading state, and error handling. Refactor `src/pages/Products.tsx` to use this hook. Finally, refactor `src/App.tsx` to act strictly as a routing container by importing all page components and removing duplicate local component declarations.

**Tech Stack:** React 19, TypeScript, Supabase JS Client, React Router v7, Tailwind CSS v4, Framer Motion, Lucide React.

---

### Task 1: Create Custom Hook `useProducts`

**Files:**
- Create: `src/hooks/useProducts.ts`

- [ ] **Step 1: Write the Custom Hook implementation**
  Create `src/hooks/useProducts.ts` to fetch products from Supabase.
  
  ```typescript
  import { useState, useEffect, useCallback } from 'react'
  import { supabase } from '../lib/supabase'

  export interface Product {
    id: string;
    name: string;
    description: string | null;
    price: number;
    image_url: string | null;
    category: string | null;
    created_at: string;
  }

  export function useProducts() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    const fetchProducts = useCallback(async () => {
      setLoading(true)
      setError(null)
      try {
        const { data, error: fetchError } = await supabase
          .from('products')
          .select('*')
          .order('name', { ascending: true })

        if (fetchError) {
          throw fetchError
        }
        setProducts(data || [])
      } catch (err: any) {
        console.error('Error fetching products:', err)
        setError(err.message || 'Gagal memuat produk')
      } finally {
        setLoading(false)
      }
    }, [])

    useEffect(() => {
      fetchProducts()
    }, [fetchProducts])

    return { products, loading, error, refetch: fetchProducts }
  }
  ```

- [ ] **Step 2: Commit hook creation**
  ```bash
  git add src/hooks/useProducts.ts
  git commit -m "feat: add useProducts custom hook for Supabase integration"
  ```

---

### Task 2: Integrate Hook into `src/pages/Products.tsx`

**Files:**
- Modify: `src/pages/Products.tsx`

- [ ] **Step 1: Replace static layout with dynamic fetch**
  Update `src/pages/Products.tsx` to call the `useProducts` hook. Include a custom Skeleton Loader and Error alert with a retry button. Keep the styling clean and align it to PT. Harmoni Dinamik Indonesia (HDI)'s theme if relevant (or keep current layout structure). Use `Intl.NumberFormat` to display price in IDR format.
  
  ```typescript
  import { motion } from 'framer-motion'
  import { Package, RefreshCw, AlertTriangle } from 'lucide-react'
  import { useProducts } from '../hooks/useProducts'

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price)
  }

  export default function Products() {
    const { products, loading, error, refetch } = useProducts()

    return (
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="bg-blue-600 p-2 rounded-xl text-white">
            <Package size={24} />
          </div>
          <h2 className="text-4xl font-black text-slate-900">Katalog Produk</h2>
        </motion.div>
        
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm animate-pulse">
                <div className="aspect-[4/5] bg-slate-100 rounded-[2rem] mb-6"></div>
                <div className="h-6 bg-slate-100 rounded-lg w-2/3 mb-4"></div>
                <div className="h-4 bg-slate-100 rounded-lg w-full mb-2"></div>
                <div className="h-4 bg-slate-100 rounded-lg w-5/6 mb-6"></div>
                <div className="h-10 bg-slate-100 rounded-full w-full"></div>
              </div>
            ))}
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-100 rounded-3xl p-8 max-w-xl mx-auto text-center shadow-lg shadow-red-50">
            <AlertTriangle className="mx-auto text-red-500 mb-4" size={48} />
            <h3 className="text-xl font-bold text-slate-950 mb-2">Gagal Memuat Produk</h3>
            <p className="text-red-700 text-sm mb-6 font-medium">{error}</p>
            <button 
              onClick={refetch}
              className="bg-slate-900 text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-600 transition inline-flex items-center gap-2"
            >
              <RefreshCw size={16} /> Coba Lagi
            </button>
          </div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-[2.5rem] border border-dashed border-slate-200">
            <Package className="mx-auto text-slate-400 mb-4" size={48} />
            <p className="text-slate-500 text-lg font-medium">Belum ada produk terdaftar.</p>
          </div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <motion.div 
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-500 group flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/5] bg-slate-100 rounded-[2rem] mb-6 overflow-hidden relative">
                    {product.image_url ? (
                      <img 
                        src={product.image_url} 
                        alt={product.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold uppercase tracking-widest text-xs group-hover:scale-110 transition duration-700">
                        Image Coming Soon
                      </div>
                    )}
                  </div>
                  <div className="px-2">
                    <h3 className="font-bold text-2xl text-slate-900 mb-2">{product.name}</h3>
                    <p className="text-slate-500 text-sm mb-6 leading-relaxed">{product.description || 'Tidak ada deskripsi tersedia.'}</p>
                  </div>
                </div>
                <div className="px-2 pt-4 border-t border-slate-50 flex justify-between items-center mt-auto">
                  <span className="font-black text-xl text-blue-600">{formatPrice(product.price)}</span>
                  <button className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-blue-600 transition">Detail</button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    )
  }
  ```

- [ ] **Step 2: Commit catalog integration**
  ```bash
  git add src/pages/Products.tsx
  git commit -m "feat: integrate useProducts hook into Products page catalog"
  ```

---

### Task 3: Refactor `src/App.tsx` and Clean Up Monolithic Declarations

**Files:**
- Modify: `src/App.tsx`

- [ ] **Step 1: Replace inline components with imports**
  Refactor `src/App.tsx` by deleting inline definitions of `Navbar`, `Scanner`, `Ticket`, `Opportunity`, `Home`, `Products`, and `Certificates` and replacing them with imports from `src/components/Navbar.tsx` and `src/pages/*.tsx`.
  
  Replace the contents of `src/App.tsx` with:
  ```typescript
  import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
  import Navbar from './components/Navbar'
  import Home from './pages/Home'
  import Products from './pages/Products'
  import Certificates from './pages/Certificates'
  import Opportunity from './pages/Opportunity'
  import Scanner from './pages/Scanner'
  import Ticket from './pages/Ticket'

  function App() {
    const location = useLocation()
    const isTicketPage = location.pathname.startsWith('/ticket')

    return (
      <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/page/opportunity" element={<Opportunity />} />
            <Route path="/scan" element={<Scanner />} />
            <Route path="/ticket/:id" element={<Ticket />} />
          </Routes>
        </main>
        {!isTicketPage && (
          <footer className="py-20 bg-slate-50 px-6 border-t border-slate-100">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
              <div>
                <h2 className="text-2xl font-black text-blue-600 mb-4 tracking-tighter">hdiasahan</h2>
                <p className="text-slate-500 max-w-sm font-medium">Pusat informasi produk kesehatan alami dan peluang bisnis HDI untuk wilayah Asahan dan sekitarnya.</p>
              </div>
              <div className="text-slate-400 text-sm font-bold md:text-right">
                &copy; 2026 hdiasahan. All rights reserved.
              </div>
            </div>
          </footer>
        )}
      </div>
    )
  }

  export default function AppWrapper() {
    return (
      <HashRouter>
        <App />
      </HashRouter>
    )
  }
  ```

- [ ] **Step 2: Commit App.tsx cleanup**
  ```bash
  git add src/App.tsx
  git commit -m "refactor: simplify App.tsx routing and import modular components"
  ```

---

### Task 4: Verify Project Compilation and Bundling

**Files:**
- Verify: Project builds and runs without errors.

- [ ] **Step 1: Run TypeScript compiler and Linter checks**
  Run commands to verify no static typing or linting errors exist:
  ```bash
  npm run lint
  ```
  Expected: Clean exit/no errors (warnings are fine).

- [ ] **Step 2: Run production build**
  Verify the single-file bundling works correctly:
  ```bash
  npm run build
  ```
  Expected: Successful compilation, bundle size output in `dist/`.
