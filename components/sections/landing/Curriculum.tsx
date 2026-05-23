'use client'

import React, { useEffect, useRef } from 'react'
import { CURRICULUM_DAYS } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'

export function Curriculum() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (!timelineRef.current) return
    const cards = timelineRef.current.querySelectorAll('.day-card')
    gsap.fromTo(
      cards,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.current, start: 'top 80%', once: true },
      }
    )
  }, [])

  return (
    <section id="curriculum" className="bg-[var(--color-canvas)]">
      <div className="max-w-[1366px] mx-auto px-4 sm:px-6 lg:px-16 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

          {/* Left: Header */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-[var(--color-primary)] mb-4">
              The Paid Product
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold leading-none mb-4 text-[var(--color-ink)]">
              10 Days to
              <br />
              Corporate Ready
            </h2>
            <p className="text-sm leading-relaxed mb-6 text-[var(--color-charcoal)]">
              A structured, modular journey. Not a random collection of tips — a
              deliberate transformation from campus to corporate.
            </p>
            <div
              className="p-4 rounded-xl"
              style={{ background: 'var(--color-primary-soft)', border: '1px solid var(--color-primary)' }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.8px] mb-1 text-[var(--color-primary)]">
                Starts June 1
              </p>
              <p className="text-2xl font-bold leading-none text-[var(--color-primary)]">
                ₹999
              </p>
              <p className="text-xs mt-0.5 text-[var(--color-primary-deep)]">
                Early Bird · Nagpur Students
              </p>
            </div>
          </div>

          {/* Right: Timeline */}
          <div ref={timelineRef} className="lg:col-span-3 flex flex-col gap-0">
            {CURRICULUM_DAYS.map((item, i) => (
              <div
                key={item.days}
                className="day-card pb-8 last:pb-0 opacity-0"
                style={{
                  borderLeft: `2px solid ${i === CURRICULUM_DAYS.length - 1 ? 'transparent' : 'var(--color-primary-soft)'}`,
                  paddingLeft: '24px',
                  position: 'relative',
                }}
              >
                {/* Dot */}
                <div
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: '-7px',
                    top: '4px',
                    background: 'var(--color-primary)',
                    border: '2px solid var(--color-canvas)',
                    boxShadow: '0 0 0 2px var(--color-primary-soft)',
                  }}
                />
                <span className="text-xs font-bold uppercase tracking-[0.8px] mb-1 text-[var(--color-primary)]">
                  {item.days}
                </span>
                <h3 className="text-base font-bold mt-0.5 mb-1 text-[var(--color-ink)]">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-charcoal)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
