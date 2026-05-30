'use client'

import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/Button'
import { User, Briefcase } from '@phosphor-icons/react'
import { initGSAP } from '@/lib/gsap'

export function WhyListenSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    if (!containerRef.current) return
    const left  = containerRef.current.querySelector('.left-panel')
    const right = containerRef.current.querySelector('.right-panel')
    const trigger = { trigger: containerRef.current, start: 'top 70%', once: true }
    if (left)  gsap.fromTo(left,  { x: '-8%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: trigger })
    if (right) gsap.fromTo(right, { x:  '8%', opacity: 0 }, { x: '0%', opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: trigger })
  }, [])

  return (
    /* ── White canvas section ── */
    <section className="band-canvas p-0" ref={containerRef}>
      <div className="flex flex-col md:flex-row min-h-[60vh]">

        {/* Left Panel — Cloud band */}
        <div className="left-panel flex-1 bg-cloud p-12 lg:p-20 flex flex-col justify-center relative">
          <div className="max-w-md ml-auto mr-0 md:mr-10 relative z-10">
            <div className="icon-chip mb-7">
              <User size={26} weight="duotone" />
            </div>
            <h3 className="font-display text-[28px] font-medium text-ink mb-4 leading-[1.1]">
              The Candidate's Chair
            </h3>
            <p className="body-text text-[16px] leading-[1.65]">
              I've sat where you are — crafting resumes at midnight, nervous before every call, unsure if I was good enough. I cracked multiple offers from top-tier firms. I know exactly what worked.
            </p>
          </div>
          {/* Divider line desktop */}
          <div className="hidden md:block absolute right-0 top-[10%] bottom-[10%] w-[1px] bg-hairline z-20" />
        </div>

        {/* Right Panel — White canvas */}
        <div className="right-panel flex-1 bg-canvas p-12 lg:p-20 flex flex-col justify-center">
          <div className="max-w-md mr-auto ml-0 md:ml-10">
            <div className="icon-chip bg-fog text-charcoal mb-7">
              <Briefcase size={26} weight="duotone" />
            </div>
            <h3 className="font-display text-[28px] font-medium text-ink mb-4 leading-[1.1]">
              The Founder's Chair
            </h3>
            <p className="body-text text-[16px] leading-[1.65]">
              Now I'm on the other side — hiring for my ventures, reviewing profiles, conducting interviews. I see the same gaps in every fresher application. I know exactly what's missing.
            </p>
          </div>
        </div>
      </div>

      {/* CTA row */}
      <div className="py-16 px-6 text-center border-t border-hairline bg-canvas">
        <Button variant="primary" size="lg" href="/register">
          Be Part of the Change →
        </Button>
      </div>
    </section>
  )
}
