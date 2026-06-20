import { combinedTokens } from '@combined/tokens/tailwind'
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: combinedTokens,
  },
}

export default config
