export type ExportFormat = 'png' | 'jpeg' | 'mp4' | 'gif'

export interface RenderOptions {
  compositionId: string
  outputPath: string
  format?: ExportFormat
  props?: Record<string, unknown>
  /** frames per second — default 30 */
  fps?: number
  /** for still exports: which frame to capture — default 0 */
  frame?: number
  width?: number
  height?: number
}

/** LinkedIn ideal dimensions */
export const LINKEDIN_POST    = { width: 1200, height: 627 }  as const
export const LINKEDIN_SQUARE  = { width: 1080, height: 1080 } as const
export const LINKEDIN_STORY   = { width: 1080, height: 1920 } as const
export const LINKEDIN_CAROUSEL_SLIDE = { width: 1080, height: 1080 } as const
