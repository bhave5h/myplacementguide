"use client";

import type React from "react";
import Image from "next/image";

export interface LogoMarqueeProps {
  description?: string;
  direction?: "left" | "right";
  logos?: Array<{
    name: string;
    logo: React.ReactNode;
  }>;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
  title?: string;
}

const DEFAULT_LOGOS = [
  { name: "ICTRD", logo: <Image src="/Images/logos/ICTRD.png" alt="ICTRD" width={140} height={48} className="h-15 lg:h-15 w-auto object-contain" /> },
  { name: "Atos", logo: <Image src="/Images/logos/atos.svg" alt="Atos" width={140} height={48} className="h-6 lg:h-10 w-auto object-contain" /> },
  { name: "Capgemini", logo: <Image src="/Images/logos/capgemini.svg" alt="Capgemini" width={140} height={48} className="h-8 lg:h-10 w-auto object-contain" /> },
  { name: "DXC", logo: <Image src="/Images/logos/dxc.png" alt="DXC" width={140} height={48} className="h-4 lg:h-6 w-auto object-contain" /> },
  { name: "Wipro", logo: <Image src="/Images/logos/wipro.svg" alt="Wipro" width={140} height={48} className="h-8 lg:h-10 w-auto object-contain" /> },
];

const SPEED_MAP = {
  slow: "60s",
  normal: "40s",
  fast: "20s",
};

export function LogoMarquee({
  title = "Trusted by industry leaders",
  description = "Join thousands of companies already using our platform",
  logos = DEFAULT_LOGOS,
  speed = "normal",
  direction = "left",
  pauseOnHover = true,
}: LogoMarqueeProps) {
  const animationDuration = SPEED_MAP[speed];
  const animationDirection = direction === "right" ? "reverse" : "normal";

  return (
    <div className="overflow-hidden py-4 w-full">
      <style>
        {`
          @keyframes marquee-scroll {
            from {
              transform: translateX(0);
            }
            to {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            animation: marquee-scroll var(--marquee-duration, 40s) linear infinite;
            animation-direction: var(--marquee-direction, normal);
          }

          .marquee-container:hover .marquee-track {
            animation-play-state: var(--marquee-pause-on-hover, running);
          }

          @media (prefers-reduced-motion: reduce) {
            .marquee-track {
              animation: none;
            }
          }
        `}
      </style>
      <div className="w-full">
        {(title || description) && (
          <div className="mb-8 text-left">
            {title && <h2 className="mb-2 font-bold text-xl text-[var(--color-ink)]">{title}</h2>}
            {description && <p className="text-[var(--color-charcoal)] text-md">{description}</p>}
          </div>
        )}

        <div
          className="marquee-container relative overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}
        >
          <div
            className="marquee-track flex w-50vw"
            style={
              {
                "--marquee-duration": animationDuration,
                "--marquee-direction": animationDirection,
                "--marquee-pause-on-hover": pauseOnHover ? "paused" : "running",
              } as React.CSSProperties
            }
          >
            {/* First set of logos */}
            {logos.map((logo, index) => (
              <div
                className="flex shrink-0 items-center justify-center px-5 py-4 opacity-50 transition-opacity duration-200 *:fill-[var(--color-ink)] hover:opacity-100"
                key={`first-${logo.name}-${index}`}
              >
                {logo.logo}
              </div>
            ))}
            {/* Second set of logos for seamless loop */}
            {logos.map((logo, index) => (
              <div
                className="flex shrink-0 items-center justify-center px-4 py-4 opacity-50 transition-opacity duration-200 *:fill-[var(--color-ink)] hover:opacity-100"
                key={`second-${logo.name}-${index}`}
              >
                {logo.logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoMarquee;
