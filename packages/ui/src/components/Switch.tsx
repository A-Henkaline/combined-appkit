import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'
import { cn } from '../lib/cn'

export interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {}

export const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, ...props }, ref) => (
  <SwitchPrimitive.Root
    ref={ref}
    className={cn(
      'peer inline-flex h-[27px] w-12 shrink-0 cursor-pointer items-center rounded-pill shadow-clay-press transition-colors duration-base outline-none focus-visible:ring-2 focus-visible:ring-royal disabled:cursor-not-allowed disabled:opacity-50',
      'bg-canvas',
      className
    )}
    {...props}
  >
    <SwitchPrimitive.Thumb
      className={cn(
        'pointer-events-none block h-[21px] w-[21px] rounded-full shadow-clay-sm transition-all duration-base',
        'translate-x-[3px] data-[state=checked]:translate-x-[24px]',
        'bg-royal data-[state=checked]:bg-gold'
      )}
    />
  </SwitchPrimitive.Root>
))
Switch.displayName = 'Switch'
