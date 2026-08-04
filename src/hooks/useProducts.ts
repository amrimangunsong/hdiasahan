import { useState, useEffect, useCallback, useRef } from 'react'
import { sql } from '../lib/neon'

export interface Product {
  id: string;
  name: string;
  description: string | null;
  price: number;
  image_url: string | null;
  category: string | null;
  created_at: string;
}

interface NeonProductRow {
  id: string | number;
  name: string;
  description?: string | null;
  price: string | number;
  image_url?: string | null;
  category?: string | null;
  created_at: string | Date;
}

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  // Track the ID of the active request to prevent race conditions
  const activeRequestIdRef = useRef<number>(0)

  const fetchProducts = useCallback(async () => {
    const requestId = ++activeRequestIdRef.current
    setLoading(true)
    setError(null)
    
    try {
      const data = await sql`SELECT id, name, description, price, image_url, category, created_at FROM products ORDER BY name ASC`

      if (requestId === activeRequestIdRef.current) {
        const rows = (data as unknown) as NeonProductRow[]
        const formattedData: Product[] = (rows || []).map((row) => ({
          id: String(row.id),
          name: String(row.name),
          description: row.description ? String(row.description) : null,
          price: typeof row.price === 'string' ? parseFloat(row.price) : Number(row.price),
          image_url: row.image_url ? String(row.image_url) : null,
          category: row.category ? String(row.category) : null,
          created_at: String(row.created_at)
        }))
        setProducts(formattedData)
      }
    } catch (err) {
      if (requestId === activeRequestIdRef.current) {
        console.error('Error fetching products from Neon:', err)
        setError(err instanceof Error ? err.message : 'Gagal memuat produk')
      }
    } finally {
      if (requestId === activeRequestIdRef.current) {
        setLoading(false)
      }
    }
  }, [])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts()
    return () => {
      // Invalidate active request on unmount
      activeRequestIdRef.current = 0
    }
  }, [fetchProducts])

  return { products, loading, error, refetch: fetchProducts }
}
