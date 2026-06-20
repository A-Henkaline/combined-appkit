export interface Message {
  role: 'system' | 'user' | 'assistant'
  content: string
}

export interface ChatOptions {
  temperature?: number
  maxTokens?: number
  systemPrompt?: string
}

export interface AIProvider {
  readonly provider: 'groq' | 'ollama'
  readonly model: string
  chat(messages: Message[], options?: ChatOptions): Promise<string>
  stream(messages: Message[], options?: ChatOptions): AsyncIterable<string>
  models(): Promise<string[]>
}
