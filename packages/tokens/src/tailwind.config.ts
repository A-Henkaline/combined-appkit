import type { Config } from 'tailwindcss'

export const combinedTokens = {
  colors: {
    royal:    { DEFAULT: '#1F4E8F', dark: '#173D70' },
    gold:     { DEFAULT: '#C9A227', dark: '#A8861F' },
    green:    { DEFAULT: '#4A5340', dark: '#3A4233' },
    pos:      { DEFAULT: '#117A37', bg: '#E3F2E8' },
    neg:      { DEFAULT: '#C8102E', bg: '#FBE7EA' },
    warn:     { DEFAULT: '#B26A00', bg: '#FBF0DD' },
    ink:      '#111111',
    body:     '#3A3A3A',
    muted:    '#6B6B6B',
    line:     { DEFAULT: '#111111', soft: '#E2E0DA' },
    surface:  '#FFFFFF',
    canvas:   '#FDFCFA',
  },
  fontFamily: {
    display: ['"Trebuchet MS"', '"Segoe UI"', 'Helvetica', 'sans-serif'],
    body:    ['Helvetica', 'Arial', 'sans-serif'],
    mono:    ['"SFMono-Regular"', 'Consolas', '"Liberation Mono"', 'monospace'],
  },
  borderRadius: {
    sm:   '8px',
    md:   '14px',
    lg:   '16px',
    pill: '50px',
  },
  boxShadow: {
    clay:       '6px 6px 14px rgba(0,0,0,0.12), -4px -4px 10px rgba(255,255,255,0.7)',
    'clay-sm':  '4px 4px 10px rgba(0,0,0,0.06), -4px -4px 10px rgba(255,255,255,0.8)',
    'clay-press': 'inset 3px 3px 8px rgba(0,0,0,0.18), inset -3px -3px 8px rgba(255,255,255,0.5)',
  },
  spacing: {
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    6: '24px',
    8: '32px',
    12: '48px',
    16: '64px',
  },
  zIndex: {
    base:     '0',
    raised:   '10',
    dropdown: '100',
    modal:    '200',
    tooltip:  '300',
  },
  transitionDuration: {
    fast: '100ms',
    base: '180ms',
  },
} satisfies Partial<Config['theme']>

const config: Config = {
  content: [],
  theme: {
    extend: combinedTokens,
  },
}

export default config
