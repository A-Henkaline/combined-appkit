import { useState, useCallback } from 'react'
import type { AIProvider, Message, ChatOptions } from './providers/types'

export function useChat(ai: AIProvider, options?: ChatOptions) {
  const [messages, setMessages] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const send = useCallback(async (content: string) => {
    const next: Message[] = [...messages, { role: 'user', content }]
    setMessages(next)
    setLoading(true)
    setError(null)
    try {
      const reply = await ai.chat(next, options)
      setMessages([...next, { role: 'assistant', content: reply }])
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
    } finally {
      setLoading(false)
    }
  }, [ai, messages, options])

  const reset = useCallback(() => setMessages([]), [])

  return { messages, send, reset, loading, error }
}

export function useStream(ai: AIProvider, options?: ChatOptions) {
  const [output, setOutput] = useState('')
  const [streaming, setStreaming] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const stream = useCallback(async (messages: Message[]) => {
    setStreaming(true)
    setOutput('')
    setError(null)
    try {
      for await (const chunk of ai.stream(messages, options)) {
        setOutput((prev) => prev + chunk)
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
    } finally {
      setStreaming(false)
    }
  }, [ai, options])

  return { output, stream, streaming, error }
}
