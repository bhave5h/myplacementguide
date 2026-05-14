import React from 'react'

interface BadgeProps {
  variant: 'free' | 'bonus' | 'new' | 'urgent'
  children: React.ReactNode
  className?: string
}

const variantClasses: Record<BadgeProps['variant'], string> = {
  free: 'bg-[rgba(34,197,94,0.10)] text-[#16a34a] border-[rgba(34,197,94,0.25)]',
  urgent: 'bg-[var(--color-bloom-rose)] text-[var(--color-bloom-deep)] border-[rgba(179,38,43,0.2)]',
  bonus: 'bg-[rgba(245,166,35,0.10)] text-[#b45309] border-[rgba(245,166,35,0.25)]',
  new: 'bg-[var(--color-primary-soft)] text-[var(--color-primary)] border-[rgba(2,74,216,0.2)]',
}

const dotClasses: Record<BadgeProps['variant'], string> = {
  free: 'bg-[#16a34a]',
  urgent: 'bg-[var(--color-bloom-deep)]',
  bonus: 'bg-[#b45309]',
  new: 'bg-[var(--color-primary)]',
}

export function Badge({ variant, children, className = '' }: BadgeProps) {
  const showDot = variant === 'free' || variant === 'urgent'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest border ${variantClasses[variant]} ${className}`}
    >
      {showDot && (
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotClasses[variant]}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotClasses[variant]}`} />
        </span>
      )}
      {children}
    </span>
  )
}
