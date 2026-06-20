import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '../lib/cn'

export interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  accent?: boolean
}

export const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, accent = false, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('h-4 w-full overflow-hidden rounded-pill bg-canvas shadow-clay-press', className)}
    {...props}
    value={value}
  >
    <ProgressPrimitive.Indicator
      className={cn(
        'h-full rounded-pill transition-all duration-base',
        accent ? 'bg-gold' : 'bg-royal'
      )}
      style={{ width: `${value ?? 0}%` }}
    />
  </ProgressPrimitive.Root>
))
Progress.displayName = 'Progress'
