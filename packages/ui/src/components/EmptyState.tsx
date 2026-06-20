import * as React from 'react'
import { cn } from '../lib/cn'

export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: string
  title: string
  description?: string
  action?: React.ReactNode
  error?: boolean
}

export function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  error = false,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'text-center py-14 px-6 bg-surface rounded-lg shadow-clay-sm',
        className
      )}
      {...props}
    >
      <div
        className={cn(
          'w-14 h-14 rounded-lg shadow-clay-press mx-auto mb-[18px] flex items-center justify-center text-2xl',
          error ? 'bg-neg-bg' : 'bg-canvas'
        )}
      >
        {icon ?? (error ? '!' : '○')}
      </div>
      <h4 className="font-display text-[17px] font-bold text-ink m-0 mb-2">{title}</h4>
      {description && (
        <p className="text-[13.5px] text-muted m-0 mb-[22px] max-w-[300px] mx-auto leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="flex justify-center gap-[10px]">{action}</div>}
    </div>
  )
}
