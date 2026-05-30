"use client";

import React, { useState, useEffect } from "react";
import { m, LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { WhatsappLogo } from "@phosphor-icons/react";
import { WHATSAPP_URL } from "@/lib/constants";

export function WhatsAppCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {isVisible && (
          <m.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: -30 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ type: "spring", damping: 22, stiffness: 120 }}
            className="fixed bottom-10 right-10 md:bottom-10 md:right-10 z-[9999] flex items-center gap-3"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            <AnimatePresence>
              {showTooltip && (
                <m.div
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  style={{
                    backgroundColor: "var(--color-ink)",
                    color: "var(--color-on-ink)",
                    padding: "8px 14px",
                    borderRadius: "var(--rounded-md)",
                    fontSize: 13,
                    fontWeight: 500,
                    whiteSpace: "nowrap",
                    boxShadow: "var(--shadow-float)",
                  }}
                  className="hidden md:block"
                >
                  Join the Community
                </m.div>
              )}
            </AnimatePresence>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact us on WhatsApp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: "50%",
                backgroundColor: "#0b0b0bff",
                color: "#fff",
                transition: "box-shadow 0.2s",
              }}
            >
              <WhatsappLogo size={26} weight="fill" />
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
