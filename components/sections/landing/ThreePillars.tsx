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
    <section
      style={{ backgroundColor: 'var(--color-canvas)', padding: '80px 24px', overflow: 'hidden' }}
    >
      <div className="max-w-[1366px] mx-auto flex flex-col items-center">
        <SectionLabel className="mb-6 justify-center">What You Will Learn</SectionLabel>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px,3.5vw,44px)',
            fontWeight: 500,
            lineHeight: 1.05,
            color: 'var(--color-ink)',
            textAlign: 'center',
            marginBottom: 56,
            maxWidth: 640,
          }}
          className="text-balance"
        >
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
                  <div
                    style={{
                      backgroundColor: 'var(--color-canvas)',
                      borderRadius: 'var(--rounded-xl)',
                      boxShadow: 'var(--shadow-soft-lift)',
                      padding: '32px 28px',
                      height: '100%',
                      position: 'relative',
                      overflow: 'hidden',
                      display: 'flex',
                      flexDirection: 'column',
                      border: '1px solid var(--color-hairline)',
                    }}
                  >
                    {/* Large background number */}
                    <m.span
                      className="absolute -right-3 -bottom-8 select-none pointer-events-none"
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 140,
                        fontWeight: 700,
                        color: 'var(--color-fog)',
                        lineHeight: 1,
                      }}
                    >
                      {pillar.number}
                    </m.span>

                    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                      {/* Icon chip */}
                      <div
                        className="group-hover:scale-110 transition-transform duration-300"
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 'var(--rounded-lg)',
                          backgroundColor: 'var(--color-primary-soft)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: 20,
                          color: 'var(--color-primary)',
                          transition: 'background-color 0.25s, color 0.25s',
                        }}
                      >
                        <Icon size={26} weight="fill" />
                      </div>

                      <div
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 12,
                          fontWeight: 600,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: 'var(--color-primary)',
                          marginBottom: 8,
                        }}
                      >
                        {pillar.number}
                      </div>

                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 20,
                          fontWeight: 500,
                          lineHeight: 1.2,
                          color: 'var(--color-ink)',
                          marginBottom: 12,
                        }}
                      >
                        {pillar.title}
                      </h3>

                      <p style={{ fontSize: 15, color: 'var(--color-charcoal)', lineHeight: 1.6 }}>
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
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 15, color: 'var(--color-charcoal)', marginBottom: 20, fontWeight: 500 }}>
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
