import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const avatarVariants = cva(
  'rounded-full flex items-center justify-center font-display font-bold shadow-clay-sm flex-shrink-0',
  {
    variants: {
      variant: {
        royal: 'bg-royal text-gold',
        gold:  'bg-gold text-royal',
        green: 'bg-green text-white',
      },
      size: {
        sm:      'w-8 h-8 text-xs',
        default: 'w-11 h-11 text-sm',
        lg:      'w-14 h-14 text-base',
      },
    },
    defaultVariants: { variant: 'royal', size: 'default' },
  }
)

export interface AvatarProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof avatarVariants> {
  initials: string
}

export function Avatar({ className, variant, size, initials, ...props }: AvatarProps) {
  return (
    <span className={cn(avatarVariants({ variant, size }), className)} {...props}>
      {initials}
    </span>
  )
}
