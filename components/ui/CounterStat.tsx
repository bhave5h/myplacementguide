'use client'

import { useEffect, useRef } from 'react'
import { initGSAP } from '@/lib/gsap'

interface CounterStatProps {
  value: string
  label: string
  suffix?: string
  className?: string
  description?: string
  /** Override the number colour; defaults to primary green */
  accentColor?: string
}

export function CounterStat({
  value,
  label,
  suffix = '',
  className = '',
  description,
  accentColor = 'var(--color-primary)',
}: CounterStatProps) {
  const countRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const gsap = initGSAP()
    const target = parseInt(value.replace(/[^0-9]/g, ''), 10)
    if (isNaN(target) || !countRef.current) return

    const obj = { val: 0 }
    gsap.to(obj, {
      val: target,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: countRef.current,
        start: 'top 85%',
        once: true,
      },
      onUpdate: () => {
        if (countRef.current) countRef.current.innerText = Math.floor(obj.val).toString()
      },
    })
  }, [value])

  const numericPart = value.replace(/[^0-9]/g, '')

  return (
    <div className={`flex flex-col ${className}`}>
      <div
        className="font-display text-[25px] md:text-[30px] font-medium leading-none flex items-baseline gap-0.5"
        style={{ color: accentColor }}
      >
        <span ref={countRef}>{isNaN(parseInt(numericPart, 10)) ? value : 0}</span>
        <span>{suffix}</span>
      </div>
      <div className="font-body text-[10px] md:text-[13px] font-medium text-[var(--color-charcoal)] mt-1 md:mt-2 uppercase tracking-[0.08em]">
        {label}
      </div>
      {description && (
        <div className="font-body text-[14px] text-[var(--color-graphite)] mt-1.5 leading-[1.5]">
          {description}
        </div>
      )}
    </div>
  )
}
