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
    <section className="band-cloud">
      <div className="max-w-[1100px] mx-auto" ref={containerRef}>
        <div className="relative">

          {/* Vertical track – desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-fog -translate-x-1/2 rounded-full" />
          {/* Animated fill line – desktop */}
          <div ref={lineRef} className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 rounded-full" />

          {/* Mobile line */}
          <div className="md:hidden absolute left-[22px] top-0 bottom-0 w-[2px] bg-primary rounded-full" />

          {CURRICULUM_DAYS.map((day, i) => {
            const isEven = i % 2 === 0
            return (
              <div
                key={i}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-14 last:mb-0"
              >
                {/* Dot – desktop */}
                <div className="hidden md:block absolute left-1/2 w-3.5 h-3.5 rounded-full bg-primary border-3 border-cloud -translate-x-1/2 z-10 shadow-[0_0_0_3px_var(--color-primary-soft)]" />
                {/* Dot – mobile */}
                <div className="md:hidden absolute left-[22px] w-3.5 h-3.5 rounded-full bg-primary border-3 border-cloud -translate-x-1/2 z-10" />

                {/* Card */}
                <LazyMotion features={domAnimation}>
                  <m.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40, y: 16 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: '-10%' }}
                    transition={{ duration: 0.55, delay: 0.15 }}
                    className={`w-full md:w-5/12 pl-12 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                  >
                    <div className="card-flat">
                      <div className={`text-[11px] font-bold tracking-[0.15em] uppercase text-primary mb-2.5 flex ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                        DAY {day.days}
                      </div>
                      <h3 className="card-title text-[20px] mb-2.5">
                        {day.title}
                      </h3>
                      <p className="body-text">
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
