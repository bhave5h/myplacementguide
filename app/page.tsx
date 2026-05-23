import { homeMeta } from '@/lib/metadata'
import { Hero } from '@/components/sections/landing/Hero'
import { RealityCheck } from '@/components/sections/landing/RealityCheck'
import { AboutMentor } from '@/components/sections/landing/Mentor'
import { ThreePillars } from '@/components/sections/landing/ThreePillars'
import { Curriculum } from '@/components/sections/landing/Curriculum'
import { Bonuses } from '@/components/sections/landing/Bonuses'
import { Mission } from '@/components/sections/landing/Mission'
import { Pricing } from '@/components/sections/landing/Pricing'
import { ClosingBand } from '@/components/sections/landing/ClosingBand'

export const metadata = homeMeta

export default function Home() {
  return (
    <>
      <Hero />
      <RealityCheck />
      <AboutMentor />
      <ThreePillars />
      <Curriculum />
      <Bonuses />
      <Mission />
      <Pricing />
      <ClosingBand />
    </>
  )
}
