'use client'

import React, { useEffect, useRef } from 'react'
import { BONUSES } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

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
    <section id="bonuses" className="max-w-6xl mx-auto bg-gray-100 py-12 lg:py-10 px-6 overflow-hidden mt-10 rounded-3xl">
      <div className="mx-auto flex flex-col items-center w-full">
        <div className="text-center mb-12">
          <ScrollReveal delay={0.1}>
            <p className="font-display text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-2">
              Extra Mile
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <h2 className="title mb-2">
              Bonuses Included
            </h2>
          </ScrollReveal>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-4">
          {BONUSES.map((b) => (
            <div key={b.title} className="bonus-card opacity-0 h-full group">
              <div className="bg-[var(--color-canvas)] rounded-[var(--rounded-xl)] shadow-[var(--shadow-soft-lift)] p-8 lg:p-[32px_28px] h-full relative overflow-hidden flex flex-col border border-[var(--color-hairline)] transition-all duration-300 hover:scale-[1.02]">
                {/* Icon chip matching ThreePillars icon chip */}
                <div className="w-[52px] h-[52px] rounded-[var(--rounded-lg)] bg-[var(--color-primary-soft)] flex items-center justify-center mb-5 text-2xl group-hover:scale-110 transition-transform duration-300">
                  {b.icon}
                </div>
                <h3 className="font-display text-[20px] font-medium leading-[1.2] text-[var(--color-ink)] mb-3">
                  {b.title}
                </h3>
                <p className="text-[15px] text-[var(--color-charcoal)] leading-[1.6]">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

