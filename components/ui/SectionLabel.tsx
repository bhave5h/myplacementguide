'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'

interface SectionLabelProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export function SectionLabel({ children, className = '', style }: SectionLabelProps) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`flex items-center gap-3 ${className}`}
        style={style}
      >
        <span className="block h-[1px] w-7 bg-[var(--color-primary)]" />
        <span className="font-display text-[12px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
          {children}
        </span>
      </m.div>
    </LazyMotion>
  )
}
