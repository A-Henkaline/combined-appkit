import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../lib/cn'

const dotVariants = cva(
  'w-8 h-8 rounded-sm flex items-center justify-center font-bold flex-shrink-0 shadow-clay-sm',
  {
    variants: {
      variant: {
        info: 'bg-royal text-gold',
        pos:  'bg-pos text-white',
        neg:  'bg-neg text-white',
        warn: 'bg-warn text-white',
      },
    },
  }
)

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dotVariants> {
  title: string
  icon?: string
}

export function Alert({ className, variant = 'info', title, icon, children, ...props }: AlertProps) {
  const defaultIcon = { info: 'i', pos: '✓', neg: '!', warn: '!' }[variant ?? 'info']

  return (
    <div
      className={cn('rounded-md p-4 shadow-clay-sm flex gap-[14px] items-start', className)}
      {...props}
    >
      <span className={dotVariants({ variant })}>{icon ?? defaultIcon}</span>
      <div>
        <h5 className="font-display font-bold text-sm text-ink m-0 mb-[3px]">{title}</h5>
        {children && <p className="m-0 text-[13px] text-muted">{children}</p>}
      </div>
    </div>
  )
}
