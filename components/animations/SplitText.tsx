'use client'

import React from 'react'
import { m, LazyMotion, domAnimation, useReducedMotion } from 'framer-motion'

interface SplitTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
  className?: string
  style?: React.CSSProperties
  by?: 'char' | 'word'
  staggerDelay?: number
}

export function SplitText({ text, as: Component = 'div', className = '', style, by = 'word', staggerDelay = 0.05 }: SplitTextProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    return <Component className={className}>{text}</Component>
  }

  const items = by === 'word' ? text.split(/(\s+)/) : text.split('')

  return (
    <LazyMotion features={domAnimation}>
      <Component className={className} style={style} aria-label={text}>
        {items.map((item, i) => {
          if (by === 'word' && item.match(/\s+/)) {
            return <span key={`space-${i}`}>{item}</span>
          }
          return (
            <m.span
              key={i}
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * staggerDelay,
                ease: [0.22, 1, 0.36, 1]
              }}
              aria-hidden="true"
            >
              {item}
            </m.span>
          )
        })}
      </Component>
    </LazyMotion>
  )
}
