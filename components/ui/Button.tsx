'use client'

import React, { useRef, useState, useEffect } from 'react'
import { m, useMotionValue, useSpring, LazyMotion, domAnimation } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'outline-ink' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  className?: string
  children: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', href, className = '', children, ...props }, ref) => {
    const internalRef = useRef<HTMLDivElement>(null)
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([])

    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const xSpring = useSpring(x, { damping: 15, stiffness: 150, mass: 0.1 })
    const ySpring = useSpring(y, { damping: 15, stiffness: 150, mass: 0.1 })

    useEffect(() => {
      const mq = window.matchMedia('(hover: hover)')
      if (!mq.matches) return
      const el = internalRef.current
      if (!el) return

      const onMove = (e: MouseEvent) => {
        const { left, top, width, height } = el.getBoundingClientRect()
        x.set((e.clientX - (left + width / 2)) * 0.12)
        y.set((e.clientY - (top + height / 2)) * 0.12)
      }
      const onLeave = () => { x.set(0); y.set(0) }
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave) }
    }, [x, y])

    const handleRipple = (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const id = Date.now()
      setRipples(prev => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }])
      setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600)
      if (props.onClick) props.onClick(e as any)
    }

    /* ── Styles ── */
    const base: React.CSSProperties = {
      position: 'relative',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: '0.7px',
      textTransform: 'uppercase',
      height: 44,
      borderRadius: 'var(--rounded-md)',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      cursor: 'pointer',
      transition: 'background-color 0.15s, border-color 0.15s, color 0.15s',
      border: '1px solid transparent',
    }

    const sizeStyles: Record<string, React.CSSProperties> = {
      sm: { padding: '0 18px', height: 38, fontSize: 13 },
      md: { padding: '0 24px', height: 44 },
      lg: { padding: '0 32px', height: 50, fontSize: 15 },
    }

    const variantStyles: Record<string, React.CSSProperties> = {
      primary: {
        backgroundColor: 'var(--color-primary)',
        color: 'var(--color-on-primary)',
      },
      outline: {
        backgroundColor: 'var(--color-canvas)',
        color: 'var(--color-primary)',
        border: '1px solid var(--color-primary)',
      },
      'outline-ink': {
        backgroundColor: 'var(--color-canvas)',
        color: 'var(--color-ink)',
        border: '1px solid var(--color-ink)',
      },
      ghost: {
        backgroundColor: 'transparent',
        color: 'var(--color-primary)',
        border: 'none',
        textDecoration: 'underline',
        textUnderlineOffset: 4,
      },
    }

    const combinedStyle: React.CSSProperties = {
      ...base,
      ...sizeStyles[size],
      ...variantStyles[variant],
    }

    const inner = (
      <>
        {children}
        {ripples.map(r => (
          <span
            key={r.id}
            style={{
              position: 'absolute',
              left: r.x,
              top: r.y,
              width: 100,
              height: 100,
              transform: 'translate(-50%,-50%)',
              borderRadius: '50%',
              backgroundColor: variant === 'primary' ? 'rgba(255,255,255,0.25)' : 'rgba(2,74,216,0.15)',
              pointerEvents: 'none',
              animation: 'ripple 0.6s ease-out',
            }}
          />
        ))}
      </>
    )

    const isLink = href !== undefined

    return (
      <LazyMotion features={domAnimation}>
        <div ref={internalRef} style={{ display: 'inline-block' }}>
          <m.div style={{ x: xSpring, y: ySpring }}>
            {isLink ? (
              <Link href={href!} style={combinedStyle} className={className} onClick={handleRipple as any}>
                {inner}
              </Link>
            ) : (
              <button
                {...props}
                ref={ref as any}
                style={combinedStyle}
                className={className}
                onClick={handleRipple}
              >
                {inner}
              </button>
            )}
          </m.div>
        </div>
      </LazyMotion>
    )
  }
)
Button.displayName = 'Button'
