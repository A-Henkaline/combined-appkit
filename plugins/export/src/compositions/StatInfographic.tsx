import React from 'react'
import { AbsoluteFill, useCurrentFrame, spring, useVideoConfig, interpolate } from 'remotion'

export interface StatInfographicProps {
  title: string
  subtitle?: string
  stats: Array<{ value: string; label: string; delta?: string; deltaType?: 'pos' | 'neg' }>
  accent?: 'royal' | 'gold' | 'green'
}

const colors = {
  royal:  '#1F4E8F',
  gold:   '#C9A227',
  green:  '#4A5340',
  pos:    '#117A37',
  neg:    '#C8102E',
  ink:    '#111111',
  muted:  '#6B6B6B',
  canvas: '#FDFCFA',
  surface:'#FFFFFF',
}

const shadow = '6px 6px 14px rgba(0,0,0,0.12), -4px -4px 10px rgba(255,255,255,0.7)'
const shadowSm = '4px 4px 10px rgba(0,0,0,0.06), -4px -4px 10px rgba(255,255,255,0.8)'

function StatBox({
  value, label, delta, deltaType, frame, index
}: StatInfographicProps['stats'][0] & { frame: number; index: number }) {
  const { fps } = useVideoConfig()
  const progress = spring({ frame: frame - index * 4, fps, config: { damping: 14 } })
  const translateY = interpolate(progress, [0, 1], [20, 0])
  const opacity = progress

  return (
    <div style={{
      background: colors.surface,
      borderRadius: 16,
      padding: '28px 24px',
      textAlign: 'center',
      boxShadow: shadow,
      opacity,
      transform: `translateY(${translateY}px)`,
    }}>
      <span style={{ fontFamily: '"Trebuchet MS", sans-serif', fontSize: 42, fontWeight: 700, color: colors.royal, display: 'block', lineHeight: 1 }}>
        {value}
      </span>
      <span style={{ fontFamily: '"Trebuchet MS", sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, color: colors.muted, display: 'block', marginTop: 8 }}>
        {label}
      </span>
      {delta && (
        <span style={{ fontSize: 13, fontWeight: 700, color: deltaType === 'neg' ? colors.neg : colors.pos, display: 'block', marginTop: 6 }}>
          {delta}
        </span>
      )}
    </div>
  )
}

export function StatInfographic({ title, subtitle, stats, accent = 'royal' }: StatInfographicProps) {
  const frame = useCurrentFrame()
  const { fps } = useVideoConfig()

  const headerProgress = spring({ frame, fps, config: { damping: 14 } })
  const lineWidth = interpolate(headerProgress, [0, 1], [0, 1])

  return (
    <AbsoluteFill style={{ background: colors.canvas, fontFamily: 'Helvetica, Arial, sans-serif', padding: 64 }}>

      {/* top hairline */}
      <div style={{
        height: 3,
        background: colors[accent],
        marginBottom: 40,
        width: `${lineWidth * 100}%`,
        borderRadius: 2,
      }} />

      {/* header */}
      <div style={{ marginBottom: 48, opacity: headerProgress }}>
        <h1 style={{
          fontFamily: '"Trebuchet MS", sans-serif',
          fontSize: 52, fontWeight: 700, color: colors.ink,
          margin: '0 0 10px', letterSpacing: -1,
        }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: 18, color: colors.muted, margin: 0 }}>{subtitle}</p>
        )}
      </div>

      {/* stat grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${Math.min(stats.length, 4)}, 1fr)`,
        gap: 20,
        flex: 1,
      }}>
        {stats.map((s, i) => (
          <StatBox key={i} {...s} frame={frame} index={i} />
        ))}
      </div>

      {/* footer brand mark */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        marginTop: 40, opacity: headerProgress,
      }}>
        <div style={{
          width: 20, height: 20, borderRadius: 5,
          background: colors[accent], position: 'relative',
          boxShadow: shadowSm,
        }}>
          <div style={{
            position: 'absolute', inset: 5, borderRadius: 2,
            background: colors.gold,
          }} />
        </div>
        <span style={{
          fontFamily: '"Trebuchet MS", sans-serif',
          fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: 2, color: colors[accent],
        }}>
          Combined
        </span>
      </div>

    </AbsoluteFill>
  )
}
