export interface QueryResult<T = Record<string, unknown>> {
  rows: T[]
  rowCount: number
  duration: number
}

export interface DataProvider {
  readonly driver: 'sqlite' | 'postgres'
  query<T = Record<string, unknown>>(sql: string, params?: unknown[]): Promise<QueryResult<T>>
  execute(sql: string, params?: unknown[]): Promise<{ changes: number }>
  close(): Promise<void>
}

export type DataConfig =
  | { driver: 'sqlite';   path?: string; authToken?: string }  // path can be file, :memory:, or libsql:// Turso URL
  | { driver: 'postgres'; connectionString: string }
