'use client'
import { useEffect, useRef }    from 'react'
import Lenis                    from 'lenis'
import { usePathname }          from 'next/navigation'

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.08, duration: 1.2, smoothWheel: true })
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  // Scroll to top on route change
  const pathname = usePathname()
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [pathname])

  return <>{children}</>
}
