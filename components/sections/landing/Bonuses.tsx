'use client'

import React, { useEffect, useRef } from 'react'
import { BONUSES } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'

export function Bonuses() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (!gridRef.current) return
    const cards = gridRef.current.querySelectorAll('.bonus-card')
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: gridRef.current, start: 'top 80%', once: true },
      }
    )
  }, [])

  return (
    <section className="bg-[var(--color-cloud)]">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16 py-20 lg:py-24">
        <div className="text-center mb-12">
          <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-4">
            Extra Mile
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold leading-none text-[var(--color-ink)]">
            Bonuses Included
          </h2>
        </div>
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {BONUSES.map((b) => (
            <div
              key={b.title}
              className="bonus-card opacity-0 p-6 rounded-xl flex flex-col gap-3 shadow-[var(--shadow-soft-lift)]"
              style={{ background: 'var(--color-canvas)', border: '1px solid var(--color-hairline)' }}
            >
              <span className="text-2xl">{b.icon}</span>
              <h3 className="text-base font-bold text-[var(--color-ink)]">
                {b.title}
              </h3>
              <p className="text-sm leading-relaxed text-[var(--color-charcoal)]">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
