'use client'

import React, { useState, useEffect } from 'react'
import { m, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion'

export function WebinarStickyCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    // Check if registered
    const checkRegistration = () => {
      if (typeof window !== 'undefined') {
        setIsRegistered(localStorage.getItem('webinar_registered') === 'true')
      }
    }
    
    checkRegistration()
    
    // Listen to storage events to update state instantly
    window.addEventListener('storage', checkRegistration)

    const handleScroll = () => {
      if (isRegistered) {
        setIsVisible(false)
        return
      }

      const formElement = document.getElementById('webinar-registration-form')
      if (!formElement) return

      const formRect = formElement.getBoundingClientRect()
      const isFormVisible = formRect.top < window.innerHeight && formRect.bottom > 0

      // Show when scrolled down 400px and the registration form is NOT on screen
      if (window.scrollY > 400 && !isFormVisible) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Run on mount in case they are already scrolled
    handleScroll()

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('storage', checkRegistration)
    }
  }, [isRegistered])

  const handleScrollToForm = () => {
    const formElement = document.getElementById('webinar-registration-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (isRegistered) return null

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isVisible && (
          <m.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-40 bg-[var(--color-ink)] border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.3)] py-3 px-6 md:py-4 md:px-8 flex items-center justify-between"
          >
            <div className="flex flex-col text-left">
              <span className="text-[12px] md:text-[13px] font-bold text-[var(--color-primary-bright)] uppercase tracking-wider">
                Free Masterclass
              </span>
              <span className="text-[14px] md:text-[16px] font-bold text-white leading-tight">
                Stop Applying. Start Getting Hired.
              </span>
            </div>
            
            <button
              onClick={handleScrollToForm}
              className="cursor-pointer bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-bright)] px-5 py-2.5 md:px-6 md:py-3 rounded-lg font-bold uppercase tracking-wider text-[11px] md:text-[12px] shadow-[0_4px_12px_rgba(22,163,74,0.3)] transition-all active:scale-[0.98]"
            >
              Register Free
            </button>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  )
}
