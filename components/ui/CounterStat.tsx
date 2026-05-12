'use client'

import { useEffect, useRef } from 'react'
import { initGSAP } from '@/lib/gsap'

interface CounterStatProps {
  value: string
  label: string
  suffix?: string
  className?: string
  description?: string
  /** Override the number colour; defaults to primary blue */
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
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 52,
          fontWeight: 500,
          lineHeight: 1,
          color: accentColor,
          display: 'flex',
          alignItems: 'baseline',
          gap: 2,
        }}
      >
        <span ref={countRef}>{isNaN(parseInt(numericPart, 10)) ? value : 0}</span>
        <span>{suffix}</span>
      </div>
      <div
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          fontWeight: 500,
          color: 'var(--color-charcoal)',
          marginTop: 8,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        {label}
      </div>
      {description && (
        <div
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 14,
            color: 'var(--color-graphite)',
            marginTop: 6,
            lineHeight: 1.5,
          }}
        >
          {description}
        </div>
      )}
    </div>
  )
}
