export { createAI, createAIFromEnv } from './factory'
export type { AIConfig } from './factory'

export { createGroqProvider } from './providers/groq'
export { createOllamaProvider } from './providers/ollama'
export type { AIProvider, Message, ChatOptions } from './providers/types'

export { useChat, useStream } from './hooks'
