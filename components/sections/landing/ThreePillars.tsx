'use client'

import React, { useEffect, useRef } from 'react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { THREE_PILLARS } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'
import * as PhosphorIcons from '@phosphor-icons/react'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export function ThreePillars() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.pillar-card')
    gsap.fromTo(
      cards,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true },
      }
    )
  }, [])

  return (
    /* ── White canvas band ── */
    <section className="bg-[var(--color-canvas)] py-12 lg:py-20 px-6 overflow-hidden">
      <div className="max-w-[1366px] mx-auto flex flex-col items-center">
        <SectionLabel className="mb-6 justify-center">What You Will Learn</SectionLabel>

        <h2 className="font-display text-[clamp(26px,3.5vw,44px)] font-medium leading-[1.05] text-[var(--color-ink)] text-center mb-14 max-w-[640px] text-balance">
          Three Pillars That Change Everything
        </h2>

        {/* ── Pillar Cards grid ── */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-14">
          <LazyMotion features={domAnimation}>
            {THREE_PILLARS.map((pillar, i) => {
              const Icon = (PhosphorIcons as any)[pillar.icon] || PhosphorIcons.Star
              return (
                <div key={i} className="pillar-card opacity-0 h-full group">
                  {/* card-product: canvas bg, 16px radius, soft-lift shadow */}
                  <div className="bg-[var(--color-canvas)] rounded-[var(--rounded-xl)] shadow-[var(--shadow-soft-lift)] p-8 lg:p-[32px_28px] h-full relative overflow-hidden flex flex-col border border-[var(--color-hairline)]">
                    
                    {/* Large background number */}
                    <m.span
                      className="absolute -right-3 -bottom-8 select-none pointer-events-none font-display text-[140px] font-bold text-[var(--color-fog)] leading-none"
                    >
                      {pillar.number}
                    </m.span>

                    <div className="relative z-10 flex flex-col h-full">
                      {/* Icon chip */}
                      <div className="w-[52px] h-[52px] rounded-[var(--rounded-lg)] bg-[var(--color-primary-soft)] flex items-center justify-center mb-5 text-[var(--color-primary)] group-hover:scale-110 transition-transform duration-300">
                        <Icon size={26} weight="fill" />
                      </div>

                      <div className="font-display text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-2">
                        {pillar.number}
                      </div>

                      <h3 className="font-display text-[20px] font-medium leading-[1.2] text-[var(--color-ink)] mb-3">
                        {pillar.title}
                      </h3>

                      <p className="text-[15px] text-[var(--color-charcoal)] leading-[1.6]">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </LazyMotion>
        </div>

        {/* ── CTA ── */}
        <div className="text-center">
          <p className="text-[15px] text-[var(--color-charcoal)] mb-5 font-medium">
            Ready to master all three?
          </p>
          <Button variant="primary" size="lg" href="/register">
            Claim Your Free Seat →
          </Button>
        </div>
      </div>
    </section>
  )
}
