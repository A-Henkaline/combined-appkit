import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'

export function createServer() {
  const app = new Hono()

  app.use('*', logger())
  app.use('*', cors({ origin: ['http://localhost:3000', 'http://localhost:5173'] }))

  app.get('/health', (c) => c.json({ status: 'ok', timestamp: new Date().toISOString() }))

  return app
}

export type AppServer = ReturnType<typeof createServer>
