'use client'

import React, { useEffect, useRef } from 'react'
import { Badge } from '@/components/ui/Badge'
import { BONUSES } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'
import * as PhosphorIcons from '@phosphor-icons/react'

export function BonusSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (!containerRef.current) return
    const cards = containerRef.current.querySelectorAll('.bonus-card')
    gsap.fromTo(
      cards,
      { y: 36, opacity: 0 },
      {
        y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true },
      }
    )
  }, [])

  const ICONS = ['FilePdf', 'EnvelopeSimple', 'Buildings']

  return (
    /* ── White canvas band ── */
    <section
      style={{
        backgroundColor: 'var(--color-canvas)',
        padding: '80px 24px',
        overflow: 'hidden',
        borderTop: '1px solid var(--color-hairline)',
      }}
    >
      <div className="max-w-[1366px] mx-auto flex flex-col items-center">
        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(26px,3.5vw,44px)',
            fontWeight: 500,
            lineHeight: 1.05,
            color: 'var(--color-ink)',
            textAlign: 'center',
            marginBottom: 56,
          }}
          className="text-balance"
        >
          The Extra Mile Bonuses
        </h2>

        <div
          ref={containerRef}
          className="flex md:grid md:grid-cols-3 gap-6 w-full overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0"
        >
          {BONUSES.map((bonus, i) => {
            const IconName = ICONS[i % ICONS.length] as any
            const Icon = (PhosphorIcons as any)[IconName] || PhosphorIcons.Star

            return (
              <div
                key={i}
                className="bonus-card opacity-0 min-w-[82vw] sm:min-w-[300px] md:min-w-0 snap-center shrink-0 h-full"
              >
                <div
                  style={{
                    backgroundColor: 'var(--color-canvas)',
                    borderRadius: 'var(--rounded-xl)',
                    boxShadow: 'var(--shadow-soft-lift)',
                    border: '1px solid var(--color-hairline)',
                    borderTop: '3px solid var(--color-primary)',
                    padding: '32px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Watermark icon */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      padding: 24,
                      opacity: 0.04,
                      pointerEvents: 'none',
                    }}
                  >
                    <Icon size={110} weight="duotone" />
                  </div>

                  <Badge variant="bonus" className="w-fit mb-6">{bonus.label}</Badge>

                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 'var(--rounded-lg)',
                      backgroundColor: 'var(--color-primary-soft)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--color-primary)',
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={22} weight="fill" />
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 18,
                      fontWeight: 500,
                      color: 'var(--color-ink)',
                      marginBottom: 10,
                    }}
                  >
                    {bonus.title}
                  </h3>
                  <p style={{ fontSize: 14, color: 'var(--color-charcoal)', lineHeight: 1.6 }}>
                    {bonus.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
