import * as React from 'react'
import { cn } from '../lib/cn'

export function DataTable({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return (
    <table
      className={cn('w-full border-separate border-spacing-y-2 font-body text-[13px]', className)}
      {...props}
    />
  )
}

export function DataTableHead({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <thead className={cn(className)} {...props} />
}

export function DataTableBody({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) {
  return <tbody className={cn(className)} {...props} />
}

export function DataTableHeadCell({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) {
  return (
    <th
      className={cn(
        'text-left font-display text-[10px] uppercase tracking-[0.5px] text-ink border-b border-line pb-2 px-[14px]',
        className
      )}
      {...props}
    />
  )
}

export function DataTableRow({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) {
  return <tr className={cn(className)} {...props} />
}

export function DataTableCell({ className, numeric, ...props }: React.TdHTMLAttributes<HTMLTableCellElement> & { numeric?: boolean }) {
  return (
    <td
      className={cn(
        'bg-canvas px-[14px] py-[13px] text-body shadow-clay-sm',
        'first:rounded-l-md last:rounded-r-md',
        numeric && 'font-display font-bold text-ink',
        className
      )}
      {...props}
    />
  )
}
