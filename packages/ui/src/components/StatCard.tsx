import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const statCardVariants = cva(
  'p-[18px] text-center rounded-lg shadow-clay',
  {
    variants: {
      variant: {
        royal: 'bg-royal',
        gold:  'bg-gold',
        green: 'bg-green',
        plain: 'bg-surface shadow-clay-sm',
      },
    },
    defaultVariants: { variant: 'plain' },
  }
)

const numVariants = cva('font-display text-[28px] font-bold block', {
  variants: {
    variant: {
      royal: 'text-white',
      gold:  'text-royal',
      green: 'text-white',
      plain: 'text-royal',
    },
  },
  defaultVariants: { variant: 'plain' },
})

const lblVariants = cva('text-[10px] uppercase tracking-[0.5px]', {
  variants: {
    variant: {
      royal: 'text-white/80',
      gold:  'text-royal-dark',
      green: 'text-white/80',
      plain: 'text-muted',
    },
  },
  defaultVariants: { variant: 'plain' },
})

export interface StatCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof statCardVariants> {
  value: string | number
  label: string
  delta?: string
  deltaType?: 'pos' | 'neg' | 'neutral'
}

export function StatCard({
  className,
  variant,
  value,
  label,
  delta,
  deltaType = 'neutral',
  ...props
}: StatCardProps) {
  return (
    <div className={cn(statCardVariants({ variant }), className)} {...props}>
      <span className={numVariants({ variant })}>{value}</span>
      <span className={lblVariants({ variant })}>{label}</span>
      {delta && (
        <span
          className={cn(
            'text-[11px] font-bold block mt-1',
            deltaType === 'pos' && 'text-pos',
            deltaType === 'neg' && 'text-neg',
            deltaType === 'neutral' && (variant === 'plain' ? 'text-muted' : 'text-white/80')
          )}
        >
          {delta}
        </span>
      )}
    </div>
  )
}
