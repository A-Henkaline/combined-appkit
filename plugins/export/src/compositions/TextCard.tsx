import React from 'react'
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion'

export interface TextCardProps {
  eyebrow?: string
  headline: string
  body?: string
  accent?: 'royal' | 'gold' | 'green'
  dark?: boolean
}

const colors = {
  royal:  '#1F4E8F',
  gold:   '#C9A227',
  green:  '#4A5340',
  ink:    '#111111',
  muted:  '#6B6B6B',
  canvas: '#FDFCFA',
  white:  '#FFFFFF',
}

export function TextCard({ eyebrow, headline, body, accent = 'royal', dark = false }: TextCardProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const bg = dark ? colors[accent] : colors.canvas
  const textColor = dark ? colors.white : colors.ink
  const subtextColor = dark ? 'rgba(255,255,255,0.8)' : colors.muted
  const markColor = dark ? colors.gold : colors[accent]

  const progress = spring({ frame, fps, config: { damping: 14 } })
  const translateY = interpolate(progress, [0, 1], [30, 0])

  return (
    <AbsoluteFill style={{
      background: bg,
      fontFamily: 'Helvetica, Arial, sans-serif',
      padding: 80,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>

      <div style={{ opacity: progress, transform: `translateY(${translateY}px)` }}>
        {eyebrow && (
          <p style={{
            fontFamily: '"Trebuchet MS", sans-serif',
            fontSize: 13, fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: 2,
            color: markColor, margin: '0 0 20px',
          }}>
            {eyebrow}
          </p>
        )}

        <div style={{
          width: 48, height: 4,
          background: markColor, borderRadius: 2,
          marginBottom: 32,
        }} />

        <h1 style={{
          fontFamily: '"Trebuchet MS", sans-serif',
          fontSize: 64, fontWeight: 700,
          color: textColor, margin: '0 0 24px',
          lineHeight: 1.05, letterSpacing: -1,
        }}>
          {headline}
        </h1>

        {body && (
          <p style={{ fontSize: 20, color: subtextColor, margin: 0, lineHeight: 1.6, maxWidth: 600 }}>
            {body}
          </p>
        )}
      </div>

    </AbsoluteFill>
  )
}
