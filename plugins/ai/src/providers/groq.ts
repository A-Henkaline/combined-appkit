import OpenAI from 'openai'
import type { AIProvider, Message, ChatOptions } from './types'

export function createGroqProvider(
  apiKey: string,
  model = 'llama-3.3-70b-versatile'
): AIProvider {
  const client = new OpenAI({
    apiKey,
    baseURL: 'https://api.groq.com/openai/v1',
  })

  return {
    provider: 'groq',
    model,

    async chat(messages, options = {}) {
      const response = await client.chat.completions.create({
        model,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.maxTokens,
        messages: options.systemPrompt
          ? [{ role: 'system', content: options.systemPrompt }, ...messages]
          : messages,
      })
      return response.choices[0]?.message?.content ?? ''
    },

    async *stream(messages, options = {}) {
      const stream = await client.chat.completions.create({
        model,
        stream: true,
        temperature: options.temperature ?? 0.7,
        max_tokens: options.maxTokens,
        messages: options.systemPrompt
          ? [{ role: 'system', content: options.systemPrompt }, ...messages]
          : messages,
      })
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content
        if (content) yield content
      }
    },

    async models() {
      const list = await client.models.list()
      return list.data.map((m) => m.id)
    },
  }
}
