'use client'

import React, { useEffect, useRef } from 'react'
import { CURRICULUM_DAYS } from '@/lib/constants'
import { initGSAP } from '@/lib/gsap'
import { m, LazyMotion, domAnimation } from 'framer-motion'

export function DayTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (lineRef.current && containerRef.current) {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: 'top' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 0.5,
          },
        }
      )
    }
  }, [])

  return (
    /* ── Cloud band alternating section ── */
    <section
      style={{ backgroundColor: 'var(--color-cloud)', padding: '80px 24px', overflow: 'hidden', position: 'relative' }}
    >
      <div className="max-w-[1100px] mx-auto" ref={containerRef}>
        <div style={{ position: 'relative' }}>

          {/* Vertical track – desktop */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: 'var(--color-fog)',
              transform: 'translateX(-50%)',
              borderRadius: 99,
            }}
          />
          {/* Animated fill line – desktop */}
          <div
            ref={lineRef}
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: 'var(--color-primary)',
              transform: 'translateX(-50%)',
              borderRadius: 99,
            }}
          />

          {/* Mobile line */}
          <div
            className="md:hidden"
            style={{
              position: 'absolute',
              left: 22,
              top: 0,
              bottom: 0,
              width: 2,
              backgroundColor: 'var(--color-primary)',
              borderRadius: 99,
            }}
          />

          {CURRICULUM_DAYS.map((day, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={i}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-14 last:mb-0"
              >
                {/* Dot – desktop */}
                <div
                  className="hidden md:block"
                  style={{
                    position: 'absolute',
                    left: '50%',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    border: '3px solid var(--color-cloud)',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                    boxShadow: '0 0 0 3px var(--color-primary-soft)',
                  }}
                />
                {/* Dot – mobile */}
                <div
                  className="md:hidden"
                  style={{
                    position: 'absolute',
                    left: 22,
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    backgroundColor: 'var(--color-primary)',
                    border: '3px solid var(--color-cloud)',
                    transform: 'translateX(-50%)',
                    zIndex: 10,
                  }}
                />

                {/* Card */}
                <LazyMotion features={domAnimation}>
                  <m.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 16 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                  >
                    <div
                      style={{
                        backgroundColor: 'var(--color-canvas)',
                        borderRadius: 'var(--rounded-xl)',
                        boxShadow: 'var(--shadow-soft-lift)',
                        padding: '24px 28px',
                        border: '1px solid var(--color-hairline)',
                      }}
                    >
                      <div
                        style={{
                          fontSize: 11,
                          fontWeight: 700,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          color: 'var(--color-primary)',
                          marginBottom: 10,
                          display: 'flex',
                          justifyContent: isEven ? 'flex-end' : 'flex-start',
                        }}
                      >
                        DAY {day.days}
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 20,
                          fontWeight: 500,
                          color: 'var(--color-ink)',
                          marginBottom: 10,
                          lineHeight: 1.2,
                        }}
                      >
                        {day.title}
                      </h3>
                      <p style={{ fontSize: 14, color: 'var(--color-charcoal)', lineHeight: 1.6 }}>
                        {day.desc}
                      </p>
                    </div>
                  </m.div>
                </LazyMotion>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
