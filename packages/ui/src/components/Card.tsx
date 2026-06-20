import * as React from 'react'
import { cn } from '../lib/cn'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  raised?: boolean
}

export function Card({ className, raised = false, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'bg-surface rounded-lg',
        raised ? 'shadow-clay' : 'shadow-clay-sm',
        className
      )}
      {...props}
    />
  )
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-baseline gap-4 border-t-2 border-line pt-3 mb-2', className)} {...props} />
}

export function CardBody({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)} {...props} />
}
