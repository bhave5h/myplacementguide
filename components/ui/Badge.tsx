import React from 'react'

interface BadgeProps {
  variant: 'free' | 'bonus' | 'new' | 'urgent'
  children: React.ReactNode
  className?: string
}

const styles: Record<BadgeProps['variant'], React.CSSProperties> = {
  free: {
    backgroundColor: 'rgba(34,197,94,0.10)',
    color: '#16a34a',
    border: '1px solid rgba(34,197,94,0.25)',
  },
  urgent: {
    backgroundColor: 'var(--color-bloom-rose)',
    color: 'var(--color-bloom-deep)',
    border: '1px solid rgba(179,38,43,0.2)',
  },
  bonus: {
    backgroundColor: 'rgba(245,166,35,0.10)',
    color: '#b45309',
    border: '1px solid rgba(245,166,35,0.25)',
  },
  new: {
    backgroundColor: 'var(--color-primary-soft)',
    color: 'var(--color-primary)',
    border: '1px solid rgba(2,74,216,0.2)',
  },
}

const dotColors: Record<BadgeProps['variant'], string> = {
  free: '#16a34a',
  urgent: 'var(--color-bloom-deep)',
  bonus: '#b45309',
  new: 'var(--color-primary)',
}

export function Badge({ variant, children, className = '' }: BadgeProps) {
  const showDot = variant === 'free' || variant === 'urgent'

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-widest ${className}`}
      style={styles[variant]}
    >
      {showDot && (
        <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8 }}>
          <span
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              backgroundColor: dotColors[variant],
              animation: 'ping 1.2s cubic-bezier(0,0,0.2,1) infinite',
              opacity: 0.75,
            }}
          />
          <span
            style={{
              position: 'relative',
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: dotColors[variant],
            }}
          />
        </span>
      )}
      {children}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}} />
    </span>
  )
}
