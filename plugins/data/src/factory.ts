import { createSQLiteProvider } from './sqlite'
import { createPostgresProvider } from './postgres'
import type { DataProvider, DataConfig } from './types'

export function createData(config: DataConfig): DataProvider {
  if (config.driver === 'sqlite') {
    return createSQLiteProvider(config.path, config.authToken)
  }
  return createPostgresProvider(config.connectionString)
}

export function createDataFromEnv(): DataProvider {
  const driver = (process.env.DB_DRIVER ?? 'sqlite') as 'sqlite' | 'postgres'

  if (driver === 'postgres') {
    const url = process.env.DATABASE_URL
    if (!url) throw new Error('DATABASE_URL is not set')
    return createPostgresProvider(url)
  }

  // Supports local file, :memory:, or a Turso libsql:// URL
  return createSQLiteProvider(
    process.env.DB_PATH ?? ':memory:',
    process.env.DB_AUTH_TOKEN
  )
}
