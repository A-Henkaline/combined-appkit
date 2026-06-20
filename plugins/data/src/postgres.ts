import { Pool } from 'pg'
import type { DataProvider, QueryResult } from './types'

export function createPostgresProvider(connectionString: string): DataProvider {
  const pool = new Pool({ connectionString })

  return {
    driver: 'postgres',

    async query<T = Record<string, unknown>>(
      sql: string,
      params: unknown[] = []
    ): Promise<QueryResult<T>> {
      const start = performance.now()
      const result = await pool.query(sql, params)
      return {
        rows: result.rows as T[],
        rowCount: result.rowCount ?? result.rows.length,
        duration: Math.round(performance.now() - start),
      }
    },

    async execute(sql: string, params: unknown[] = []) {
      const result = await pool.query(sql, params)
      return { changes: result.rowCount ?? 0 }
    },

    async close() {
      await pool.end()
    },
  }
}
