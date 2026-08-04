import { neon } from '@neondatabase/serverless'

const databaseUrl = import.meta.env.VITE_NEON_DATABASE_URL

if (!databaseUrl) {
  console.warn('VITE_NEON_DATABASE_URL environment variable is missing!')
}

export const sql = neon(databaseUrl || '')
