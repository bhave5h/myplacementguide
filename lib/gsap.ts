import { gsap }          from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

let registered = false

export function initGSAP() {
  if (registered) return gsap
  gsap.registerPlugin(ScrollTrigger)
  registered = true
  return gsap
}

export { gsap, ScrollTrigger }
