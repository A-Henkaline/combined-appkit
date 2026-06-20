import { createClient } from '@libsql/client'
import type { DataProvider, QueryResult } from './types'

/**
 * Local SQLite via libSQL — pure JS, no native compilation.
 * path: ':memory:' for in-memory, or a file path like './local.db'
 * Also accepts Turso URLs: 'libsql://your-db.turso.io' with authToken
 */
export function createSQLiteProvider(
  path = ':memory:',
  authToken?: string
): DataProvider {
  const client = createClient(
    path.startsWith('libsql://') || path.startsWith('wss://')
      ? { url: path, authToken }
      : { url: `file:${path}` }
  )

  return {
    driver: 'sqlite',

    async query<T = Record<string, unknown>>(
      sql: string,
      params: unknown[] = []
    ): Promise<QueryResult<T>> {
      const start = performance.now()
      const result = await client.execute({ sql, args: params })
      return {
        rows: result.rows as unknown as T[],
        rowCount: result.rows.length,
        duration: Math.round(performance.now() - start),
      }
    },

    async execute(sql: string, params: unknown[] = []) {
      const result = await client.execute({ sql, args: params })
      return { changes: result.rowsAffected }
    },

    async close() {
      client.close()
    },
  }
}
