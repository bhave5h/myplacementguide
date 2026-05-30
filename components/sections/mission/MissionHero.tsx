'use client'

import React from 'react'
import { SplitText } from '@/components/animations/SplitText'
import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { CaretDown } from '@phosphor-icons/react'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export function MissionHero() {
  return (
    /* ── Full-viewport ink slab ── */
    <section className="band-ink min-h-[100svh] pt-20">
      <div className="max-w-[1366px] mx-auto px-6 text-center z-10 flex flex-col items-center">
        <SplitText
          text="Bridging Campus to Corporate."
          as="h1"
          className="hero-title text-[clamp(36px,6vw,72px)] mb-7 leading-none"
          by="char"
          staggerDelay={0.028}
        />

        <ScrollReveal delay={1.4}>
          <p className="hero-para text-[20px] max-w-[480px] mb-0 leading-[1.5]">
            A platform built out of frustration, not ambition.
          </p>
        </ScrollReveal>
      </div>

      {/* Scroll caret */}
      <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.8 }}
          style={{ position: 'absolute', bottom: 40, left: 0, right: 0, display: 'flex', justifyContent: 'center' }}
        >
          <m.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
            <CaretDown size={28} weight="light" style={{ color: 'var(--color-graphite)' }} />
          </m.div>
        </m.div>
      </LazyMotion>
    </section>
  )
}
