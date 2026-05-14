'use client'

import React from 'react'
import { m, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: 'up' | 'left' | 'right' | 'none'
}

export function ScrollReveal({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 0.8,
  direction = 'none'
}: ScrollRevealProps) {
  
  const prefersReducedMotion = useReducedMotion()
  
  const yOffset = direction === 'up' ? 30 : 0
  const xOffset = direction === 'left' ? -30 : direction === 'right' ? 30 : 0

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ 
          y: yOffset,
          x: xOffset,
          opacity: 0
        }}
        whileInView={{ 
          y: 0,
          x: 0,
          opacity: 1
        }}
        viewport={{ once: true }}
        transition={{ 
          duration, 
          delay,
          ease: [0.22, 1, 0.36, 1]
        }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
