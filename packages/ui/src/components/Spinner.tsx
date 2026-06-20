import * as React from 'react'
import { cn } from '../lib/cn'

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'default' | 'lg'
  accent?: boolean
}

export function Spinner({ className, size = 'default', accent = false, ...props }: SpinnerProps) {
  return (
    <div
      className={cn(
        'rounded-full border-[3px] border-line-soft animate-spin',
        accent ? 'border-t-gold' : 'border-t-royal',
        size === 'sm'      && 'w-4 h-4 border-2',
        size === 'default' && 'w-7 h-7',
        size === 'lg'      && 'w-10 h-10 border-4',
        className
      )}
      {...props}
    />
  )
}
