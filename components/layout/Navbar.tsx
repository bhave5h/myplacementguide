'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { m, LazyMotion, domAnimation, AnimatePresence } from 'framer-motion'
import { List, X } from '@phosphor-icons/react'
import { NAV_LINKS, SITE_NAME } from '@/lib/constants'

export function Navbar({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  return (
    <LazyMotion features={domAnimation}>
      {/* ── Utility Strip ── */}
      {/* <div
        style={{
          backgroundColor: 'var(--color-ink)',
          color: 'var(--color-on-ink)',
          height: 36,
          padding: '0 32px',
        }}
        className="hidden md:flex items-center justify-end gap-6"
      >
        <span className="t-caption-md opacity-80">Free Masterclass · May 24 &amp; 31 · Nagpur</span>
        <Link
          href="/register"
          className="t-caption-md font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity"
        >
          Register Free →
        </Link>
      </div> */}

      {/* ── Main Nav Bar ── */}
      <header
        style={{
          backgroundColor: 'var(--color-canvas)',
          borderBottom: isScrolled ? '1px solid var(--color-hairline)' : '1px solid var(--color-hairline)',
          height: 64,
        }}
        className={`sticky top-0 left-0 right-0 z-50 transition-shadow duration-300 ${className || ''}`}
        role="banner"
      >
        <div className="max-w-[1366px] mx-auto px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-display font-bold text-xl tracking-tight"
            style={{ color: 'var(--color-ink-deep)' }}
            aria-label="MyPlacementGuide home"
          >
            {SITE_NAME}
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="relative px-4 py-1.5 t-body-md transition-colors hover:text-[var(--color-primary)]"
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--color-ink)',
                    borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                    paddingBottom: 6,
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/register"
              className="t-button-md inline-flex items-center justify-center h-11 px-6 rounded-[var(--rounded-md)] transition-colors"
              style={{
                backgroundColor: 'var(--color-primary)',
                color: 'var(--color-on-primary)',
              }}
              id="navbar-register-cta"
            >
              Register Free
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 -mr-2"
            style={{ color: 'var(--color-ink)' }}
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Navigation Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <List size={26} />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] md:hidden"
              style={{ backgroundColor: 'rgba(26,26,26,0.4)' }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <m.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs z-[101] flex flex-col p-6 md:hidden"
              style={{
                backgroundColor: 'var(--color-canvas)',
                borderLeft: '1px solid var(--color-hairline)',
              }}
            >
              <div className="flex justify-between items-center mb-10">
                <span className="font-display font-bold text-lg" style={{ color: 'var(--color-ink)' }}>
                  {SITE_NAME}
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ color: 'var(--color-ink)' }}
                  aria-label="Close Navigation Menu"
                  className="p-2 -mr-2"
                >
                  <X size={26} />
                </button>
              </div>

              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="t-body-lg px-3 py-3 rounded-[var(--rounded-lg)] transition-colors"
                      style={{
                        color: isActive ? 'var(--color-primary)' : 'var(--color-ink)',
                        backgroundColor: isActive ? 'var(--color-primary-soft)' : 'transparent',
                        fontWeight: 500,
                      }}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-auto pb-4">
                <Link
                  href="/register"
                  className="t-button-md w-full inline-flex items-center justify-center h-11 px-6 rounded-[var(--rounded-md)]"
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: 'var(--color-on-primary)',
                  }}
                >
                  Register Free →
                </Link>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
