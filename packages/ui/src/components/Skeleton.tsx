import * as React from 'react'
import { cn } from '../lib/cn'

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'rounded-md animate-pulse',
        'bg-gradient-to-r from-line-soft via-[#eae8e2] to-line-soft bg-[length:600px_100%]',
        '[animation:shimmer_1.4s_infinite_linear]',
        className
      )}
      {...props}
    />
  )
}

export function SkeletonText({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Skeleton className={cn('h-[14px] mb-[10px]', className)} {...props} />
}

export function SkeletonTitle({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Skeleton className={cn('h-[22px] mb-[14px] w-[60%]', className)} {...props} />
}

export function SkeletonAvatar({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Skeleton className={cn('w-11 h-11 rounded-full flex-shrink-0', className)} {...props} />
}

export function SkeletonButton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Skeleton className={cn('h-[38px] w-[110px] rounded-md', className)} {...props} />
}

export function SkeletonStat({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <Skeleton className={cn('h-[100px] rounded-lg', className)} {...props} />
}
