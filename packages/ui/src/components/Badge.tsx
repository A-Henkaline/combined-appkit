import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const badgeVariants = cva(
  'inline-block font-display font-bold text-[11px] px-3 py-1 rounded-pill',
  {
    variants: {
      variant: {
        royal: 'bg-royal text-gold',
        gold:  'bg-gold text-royal',
        green: 'bg-green text-white',
        pos:   'bg-pos text-white',
        neg:   'bg-neg text-white',
        soft:  'bg-canvas text-ink shadow-clay-sm',
      },
    },
    defaultVariants: {
      variant: 'royal',
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />
}
