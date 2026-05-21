import { homeMeta } from '@/lib/metadata'
import { Hero } from '@/components/sections/landing/Hero'
import { RealityCheck } from '@/components/sections/landing/RealityCheck'
import { AboutMentor } from '@/components/sections/landing/Mentor'
import { ThreePillars } from '@/components/sections/landing/ThreePillars'

export const metadata = homeMeta

export default function Home() {
  return (
    <>
      <Hero />
      <RealityCheck />
      <AboutMentor />
      <ThreePillars />
    </>
  )
}
