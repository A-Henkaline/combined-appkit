import { createGroqProvider } from './providers/groq'
import { createOllamaProvider } from './providers/ollama'
import type { AIProvider } from './providers/types'

export type AIConfig =
  | { provider: 'groq';   apiKey: string; model?: string }
  | { provider: 'ollama'; model?: string; baseURL?: string }

export function createAI(config: AIConfig): AIProvider {
  if (config.provider === 'groq') {
    return createGroqProvider(config.apiKey, config.model)
  }
  return createOllamaProvider(config.model, config.baseURL)
}

export function createAIFromEnv(): AIProvider {
  const provider = (process.env.AI_PROVIDER ?? 'groq') as 'groq' | 'ollama'

  if (provider === 'groq') {
    const apiKey = process.env.GROQ_API_KEY
    if (!apiKey) throw new Error('GROQ_API_KEY is not set')
    return createGroqProvider(apiKey, process.env.GROQ_MODEL)
  }

  return createOllamaProvider(
    process.env.OLLAMA_MODEL,
    process.env.OLLAMA_BASE_URL
  )
}
