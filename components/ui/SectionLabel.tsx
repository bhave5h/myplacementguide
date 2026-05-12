'use client'

import { m, LazyMotion, domAnimation } from 'framer-motion'

export function SectionLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`flex items-center gap-3 ${className}`}
      >
        <span
          style={{
            display: 'block',
            height: 1,
            width: 28,
            backgroundColor: 'var(--color-primary)',
          }}
        />
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-primary)',
          }}
        >
          {children}
        </span>
      </m.div>
    </LazyMotion>
  )
}
