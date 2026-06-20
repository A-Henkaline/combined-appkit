import path from 'path'
import { bundle } from '@remotion/bundler'
import { renderStill, renderMedia, selectComposition } from '@remotion/renderer'
import type { RenderOptions } from './types'

export async function renderComposition(
  entryPoint: string,
  options: RenderOptions
): Promise<string> {
  const {
    compositionId,
    outputPath,
    format = 'png',
    props = {},
    fps = 30,
    frame = 0,
    width,
    height,
  } = options

  const bundled = await bundle({
    entryPoint: path.resolve(entryPoint),
    webpackOverride: (config) => config,
  })

  const composition = await selectComposition({
    serveUrl: bundled,
    id: compositionId,
    inputProps: props,
  })

  const resolved = {
    ...composition,
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  }

  if (format === 'png' || format === 'jpeg') {
    await renderStill({
      composition: resolved,
      serveUrl: bundled,
      output: outputPath,
      frame,
      imageFormat: format,
      inputProps: props,
    })
  } else {
    await renderMedia({
      composition: resolved,
      serveUrl: bundled,
      codec: format === 'mp4' ? 'h264' : 'gif',
      outputLocation: outputPath,
      fps,
      inputProps: props,
    })
  }

  return outputPath
}

/** Shortcut: render a LinkedIn post still (1200×627 PNG) */
export async function renderLinkedInPost(
  entryPoint: string,
  compositionId: string,
  outputPath: string,
  props?: Record<string, unknown>
): Promise<string> {
  return renderComposition(entryPoint, {
    compositionId,
    outputPath,
    format: 'png',
    width: 1200,
    height: 627,
    props,
  })
}
