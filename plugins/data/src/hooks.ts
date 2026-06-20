import { useState, useEffect, useCallback, useRef } from 'react'
import type { DataProvider, QueryResult } from './types'

export interface UseQueryOptions {
  enabled?: boolean
  refetchInterval?: number
}

export interface UseQueryResult<T> {
  data: T[] | null
  loading: boolean
  error: Error | null
  refetch: () => void
  duration: number | null
}

export function useQuery<T = Record<string, unknown>>(
  provider: DataProvider,
  sql: string,
  params: unknown[] = [],
  options: UseQueryOptions = {}
): UseQueryResult<T> {
  const { enabled = true, refetchInterval } = options
  const [result, setResult] = useState<QueryResult<T> | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const paramsRef = useRef(params)

  const run = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const r = await provider.query<T>(sql, paramsRef.current)
      setResult(r)
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
    } finally {
      setLoading(false)
    }
  }, [provider, sql])

  useEffect(() => {
    if (!enabled) return
    run()
    if (!refetchInterval) return
    const id = setInterval(run, refetchInterval)
    return () => clearInterval(id)
  }, [run, enabled, refetchInterval])

  return {
    data: result?.rows ?? null,
    loading,
    error,
    refetch: run,
    duration: result?.duration ?? null,
  }
}

export function useMutation(provider: DataProvider) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const execute = useCallback(async (sql: string, params: unknown[] = []) => {
    setLoading(true)
    setError(null)
    try {
      return await provider.execute(sql, params)
    } catch (err) {
      const e = err instanceof Error ? err : new Error(String(err))
      setError(e)
      throw e
    } finally {
      setLoading(false)
    }
  }, [provider])

  return { execute, loading, error }
}
