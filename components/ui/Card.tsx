'use client'

import React, { useRef } from 'react'
import { m, useMotionValue, useSpring, useTransform, LazyMotion, domAnimation } from 'framer-motion'

interface CardProps {
  variant?: 'product' | 'feature' | 'flat'
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function Card({ variant = 'product', children, className = '', style }: CardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mx = useSpring(x, { stiffness: 300, damping: 30 })
  const my = useSpring(y, { stiffness: 300, damping: 30 })
  const rotateX = useTransform(my, [-0.5, 0.5], ['6deg', '-6deg'])
  const rotateY = useTransform(mx, [-0.5, 0.5], ['-6deg', '6deg'])

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    x.set((e.clientX - left) / width - 0.5)
    y.set((e.clientY - top) / height - 0.5)
  }
  const onLeave = () => { x.set(0); y.set(0) }

  const baseStyle: React.CSSProperties = {
    borderRadius: 'var(--rounded-xl)',
    overflow: 'hidden',
    position: 'relative',
    transition: 'box-shadow 0.2s',
  }

  const variantStyles: Record<string, React.CSSProperties> = {
    product: {
      backgroundColor: 'var(--color-canvas)',
      boxShadow: 'var(--shadow-soft-lift)',
      padding: 24,
    },
    feature: {
      backgroundColor: 'var(--color-cloud)',
      padding: 32,
    },
    flat: {
      backgroundColor: 'var(--color-canvas)',
      border: '1px solid var(--color-hairline)',
      padding: 24,
    },
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ ...baseStyle, ...variantStyles[variant], ...style, rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={className}
      >
        <div style={{ transform: 'translateZ(20px)', height: '100%' }}>
          {children}
        </div>
      </m.div>
    </LazyMotion>
  )
}
