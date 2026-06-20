import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-display font-bold rounded-md transition-all duration-fast cursor-pointer border-none disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary:   'bg-royal text-white shadow-clay hover:bg-royal-dark active:shadow-clay-press active:translate-y-px',
        accent:    'bg-gold text-royal shadow-clay hover:bg-gold-dark active:shadow-clay-press active:translate-y-px',
        secondary: 'bg-green text-white shadow-clay hover:bg-green-dark active:shadow-clay-press active:translate-y-px',
        ghost:     'bg-surface text-ink shadow-clay-sm hover:shadow-clay',
        danger:    'bg-neg text-white shadow-clay hover:opacity-90 active:shadow-clay-press active:translate-y-px',
      },
      size: {
        sm:      'text-xs px-[14px] py-[7px]',
        default: 'text-[13px] px-[22px] py-[11px]',
        lg:      'text-[15px] px-[30px] py-[14px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'
