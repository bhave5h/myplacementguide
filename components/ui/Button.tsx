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

    /* ── Tailwind Class Mappings ── */
    const sizeClasses: Record<string, string> = {
      sm: 'px-[18px] h-[38px] text-[13px]',
      md: 'px-[24px] h-[44px] text-[14px]',
      lg: 'px-[32px] h-[50px] text-[15px]',
    }

    const variantClasses: Record<string, string> = {
      primary: 'bg-[var(--color-primary)] text-[var(--color-on-primary)] border-transparent',
      outline: 'bg-[var(--color-canvas)] text-[var(--color-primary)] border-[var(--color-primary)]',
      'outline-ink': 'bg-[var(--color-canvas)] text-[var(--color-ink)] border-[var(--color-ink)]',
      ghost: 'bg-transparent text-[var(--color-primary)] border-transparent underline underline-offset-4',
    }

    const buttonClasses = `
      relative inline-flex items-center justify-center
      font-display font-semibold tracking-[0.7px] uppercase
      rounded-[var(--rounded-md)] overflow-hidden white-space-nowrap cursor-pointer
      transition-colors duration-150 border
      ${sizeClasses[size]}
      ${variantClasses[variant]}
      ${className}
    `.trim()

    const inner = (
      <>
        {children}
        {ripples.map(r => (
          <span
            key={r.id}
            className={`absolute w-[100px] h-[100px] translate-x-[-50%] translate-y-[-50%] rounded-full pointer-events-none animate-ripple
              ${variant === 'primary' ? 'bg-[rgba(255,255,255,0.25)]' : 'bg-[rgba(2,74,216,0.15)]'}`}
            style={{ left: r.x, top: r.y }}
          />
        ))}
      </>
    )

    const isLink = href !== undefined

    return (
      <LazyMotion features={domAnimation}>
        <div ref={internalRef} className="inline-block">
          <m.div style={{ x: xSpring, y: ySpring }}>
            {isLink ? (
              <Link href={href!} className={buttonClasses} onClick={handleRipple as any}>
                {inner}
              </Link>
            ) : (
              <button
                {...props}
                ref={ref as any}
                className={buttonClasses}
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
