import { missionMeta } from '@/lib/metadata'
import { MissionHero } from '@/components/sections/mission/MissionHero'
import { BeyondDegree } from '@/components/sections/mission/BeyondDegree'
import { WhyListenSection } from '@/components/sections/mission/WhyListenSection'

export const metadata = missionMeta

export default function MissionPage() {
  return (
    <>
      <MissionHero />
      <BeyondDegree />
      <WhyListenSection />
    </>
  )
}
