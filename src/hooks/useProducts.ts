import { useState, useEffect, useCallback, useRef } from 'react'
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
  
  // Track the ID of the active request to prevent race conditions
  const activeRequestIdRef = useRef<number>(0)

  const fetchProducts = useCallback(async () => {
    const requestId = ++activeRequestIdRef.current
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

      if (requestId === activeRequestIdRef.current) {
        setProducts(data || [])
      }
    } catch (err) {
      if (requestId === activeRequestIdRef.current) {
        console.error('Error fetching products:', err)
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
