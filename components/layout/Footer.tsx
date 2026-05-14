import React from 'react'
import Link from 'next/link'
import { WhatsappLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react/dist/ssr'
import { NAV_LINKS, SITE_NAME, WHATSAPP_URL } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="bg-[var(--color-ink)] text-[var(--color-on-ink)] py-16 px-8">
      <div className="max-w-[1366px] mx-auto">
        {/* ── 3-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">

          {/* Col 1 – Brand */}
          <div>
            <h3 className="t-display-sm mb-3 text-[var(--color-on-ink)]">
              {SITE_NAME}
            </h3>
            <p className="t-body-md mb-6 text-[var(--color-steel)]">
              Bridging Campus to Corporate.<br />Nagpur's #1 Career Masterclass.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-[var(--color-steel)] transition-opacity hover:opacity-70"
              >
                <InstagramLogo size={22} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[var(--color-steel)] transition-opacity hover:opacity-70"
              >
                <LinkedinLogo size={22} />
              </a>
            </div>
          </div>

          {/* Col 2 – Navigation */}
          <div>
            <h4 className="t-body-em mb-5 text-[var(--color-on-ink)]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="t-caption-md text-[var(--color-steel)] transition-opacity hover:opacity-70"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Community */}
          <div>
            <h4 className="t-body-em mb-5 text-[var(--color-on-ink)]">
              Connect
            </h4>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-[var(--rounded-md)] mb-6 transition-opacity hover:opacity-80 bg-[#25D366] text-white"
            >
              <WhatsappLogo size={18} weight="fill" />
              <span className="t-button-md">Join WhatsApp Community</span>
            </a>
            <p className="t-caption-md text-[var(--color-steel)]">
              Get updates, job tips &amp; peer support — directly on WhatsApp.
            </p>
          </div>
        </div>

        {/* ── Bottom Strip ── */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.08)]">
          <p className="t-caption-sm text-[var(--color-graphite)]">
            © 2025 {SITE_NAME} · Built by Sarang Divakar Thakre
          </p>
          <p className="t-caption-sm text-[var(--color-graphite)]">
            Nagpur, Maharashtra, India
          </p>
        </div>
      </div>
    </footer>
  )
}
