import * as React from 'react'
import { cn } from '../lib/cn'

const fieldBase =
  'w-full font-body text-sm text-ink bg-canvas border-none rounded-md px-[14px] py-3 shadow-clay-press outline-none transition-shadow duration-fast focus:shadow-[inset_3px_3px_8px_rgba(0,0,0,0.18),inset_-3px_-3px_8px_rgba(255,255,255,0.5),0_0_0_2px_#1F4E8F]'

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}
export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={cn('block font-display text-[11px] font-bold uppercase tracking-[0.5px] text-ink mb-[6px]', className)}
      {...props}
    />
  )
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input ref={ref} className={cn(fieldBase, className)} {...props} />
  )
)
Input.displayName = 'Input'

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}
export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => (
    <textarea ref={ref} className={cn(fieldBase, 'min-h-[78px] resize-y', className)} {...props} />
  )
)
Textarea.displayName = 'Textarea'

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}
export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <select ref={ref} className={cn(fieldBase, className)} {...props} />
  )
)
Select.displayName = 'Select'

export interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {}
export function Field({ className, ...props }: FieldProps) {
  return <div className={cn('mb-[14px]', className)} {...props} />
}
