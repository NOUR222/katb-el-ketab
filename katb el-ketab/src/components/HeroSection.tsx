import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown, Heart } from 'lucide-react'
import { useRef } from 'react'
import { invitation } from '../data/invitation'
import { BotanicalMark } from './BotanicalMark'
import { MagicTrail, PalaceSilhouette, TiaraMark } from './FairytaleOrnaments'
import { StarlightField } from './RoyalOrnaments'

const ceremonyDate = new Date(invitation.event.isoDate)
const ceremonyDay = new Intl.DateTimeFormat('en-GB', {
  day: '2-digit',
  timeZone: 'Africa/Cairo',
}).format(ceremonyDate)
const ceremonyMonthYear = new Intl.DateTimeFormat('en-GB', {
  month: 'long',
  year: 'numeric',
  timeZone: 'Africa/Cairo',
}).format(ceremonyDate).replace(' ', ' · ')

type HeroSectionProps = {
  guestName: string
  isPersonalized: boolean
}

export function HeroSection({ guestName, isPersonalized }: HeroSectionProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '8%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '18%'])

  return (
    <header
      ref={sectionRef}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ivory outline-none"
      id="home"
      tabIndex={-1}
    >
      <div className="paper-field absolute inset-0 -z-20" aria-hidden="true" />
      <PalaceSilhouette className="pointer-events-none absolute -bottom-2 left-1/2 -z-10 h-40 w-[125%] -translate-x-1/2 text-gold/[0.075] sm:h-52 lg:h-60" />
      <StarlightField className="z-0 text-gold/40" />
      <nav
        className="absolute inset-x-0 top-0 z-20 mx-auto flex max-w-[1440px] items-center justify-between px-5 pb-5 pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-8 lg:px-14"
        aria-label="Invitation navigation"
      >
        <a
          href="#home"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/20 font-display text-lg text-espresso transition hover:border-gold hover:text-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          aria-label="Noureldin and Rana — home"
        >
          N<span className="mx-0.5 text-[8px] text-gold">&</span>R
        </a>
        <div className="hidden items-center gap-8 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/80 md:flex">
          <a className="nav-link" href="#details">Details</a>
          <a className="nav-link" href="#story">Our story</a>
          <a className="nav-link" href="#venue">Venue</a>
          <a className="nav-link" href="#gallery">Gallery</a>
        </div>
        <a className="button-outline px-4 py-2.5 text-[9px] sm:px-6" href="#rsvp">RSVP</a>
      </nav>

      <div className="mx-auto grid min-h-[100svh] max-w-[1440px] items-center gap-8 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16 lg:px-14 lg:pb-12 lg:pt-28">
        <motion.div style={{ y: reduceMotion ? 0 : contentY }} className="relative z-10 order-2 pb-3 text-center lg:order-1 lg:text-left">
          <BotanicalMark className="absolute -left-24 -top-24 hidden h-56 text-gold/10 lg:block" />
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            <p className="eyebrow text-gold">A love written in gold</p>
            <p className="mt-3 text-[10px] uppercase tracking-[0.22em] text-ink/80">Together with their families</p>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-[clamp(4.15rem,18vw,7rem)] font-medium leading-[0.68] tracking-[-0.055em] text-espresso lg:text-[clamp(5.8rem,8.2vw,8.4rem)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block">{invitation.couple.shortGroom}</span>
            <span className="mt-5 block font-sans text-[0.11em] font-light uppercase tracking-[0.32em] text-ink/80 lg:ml-2">
              {invitation.couple.groomFamily}
            </span>
            <span className="my-4 flex items-center justify-center gap-5 text-[0.22em] font-normal italic tracking-normal text-gold lg:justify-start">
              <span className="h-px w-12 bg-gold/50" />
              <Heart className="h-5 w-5" strokeWidth={1} aria-label="and" />
              <span className="h-px w-12 bg-gold/50" />
            </span>
            <span className="block">{invitation.couple.shortBride}</span>
            <span className="mt-5 block font-sans text-[0.11em] font-light uppercase tracking-[0.32em] text-ink/80 lg:ml-2">
              {invitation.couple.brideFamily}
            </span>
          </motion.h1>

          <motion.div
            className="mx-auto mt-10 max-w-md border-t border-espresso/15 pt-6 lg:mx-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <p className="break-words font-display text-2xl leading-tight text-espresso [overflow-wrap:anywhere] sm:text-3xl">
              {isPersonalized ? `Welcome, ${guestName}` : 'Welcome, dear family & friends'}
            </p>
            <p className="mt-2 text-xs font-light leading-6 text-ink/80 sm:text-sm">
              We would be honoured to begin this beautiful chapter with you.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative order-1 mx-auto w-full max-w-[480px] lg:order-2 lg:max-w-[620px]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ y: reduceMotion ? 0 : photoY }}
        >
          <MagicTrail className="pointer-events-none absolute -right-14 -top-12 z-10 h-40 w-64 text-gold/50 sm:-right-20 sm:h-48 sm:w-80" />
          <TiaraMark className="pointer-events-none absolute -top-9 left-[48%] z-10 h-12 w-28 -translate-x-1/2 text-gold/75 sm:h-14 sm:w-32" />
          <div className="absolute -left-3 top-12 h-[78%] w-[85%] rounded-t-[48%] border border-gold/35 sm:-left-6" />
          <div className="arched-portrait relative ml-auto aspect-[3/4] w-[92%] overflow-hidden bg-parchment shadow-editorial">
            <img
              src={invitation.images.couple.src}
              srcSet={invitation.images.couple.srcSet}
              sizes="(min-width: 1024px) 44vw, 86vw"
              width={invitation.images.couple.width}
              height={invitation.images.couple.height}
              alt={invitation.images.couple.alt}
              className="h-full w-full origin-[100%_44%] scale-[1.32] object-cover object-[62%_44%] saturate-[0.88] contrast-[1.03]"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(216,189,139,.08),transparent_35%,rgba(45,36,31,.46))]" />
            <div className="arched-portrait__keyline absolute inset-2 border border-champagne/60" aria-hidden="true" />
            <p className="absolute inset-x-6 bottom-5 border-l border-champagne/60 bg-espresso/80 px-4 py-2.5 text-center font-display text-2xl italic leading-tight text-white shadow-lg sm:bottom-7 sm:left-7 sm:right-auto sm:max-w-[80%] sm:text-left sm:text-3xl">
              Our happily ever after begins here
            </p>
          </div>
          <div className="absolute -right-1 top-8 flex flex-col items-center gap-3 text-gold sm:-right-4">
            <span className="font-display text-3xl">{ceremonyDay}</span>
            <span className="h-16 w-px bg-gold/40" />
            <span className="writing-vertical text-[9px] uppercase tracking-[0.28em]">{ceremonyMonthYear}</span>
          </div>
          <motion.div
            className="royal-seal absolute -bottom-5 -left-2 grid h-20 w-20 place-items-center rounded-full bg-espresso text-center text-[8px] uppercase leading-4 tracking-[0.2em] text-linen shadow-float sm:-left-8 sm:h-24 sm:w-24 sm:text-[9px]"
            animate={reduceMotion ? undefined : { rotate: 360 }}
            transition={reduceMotion ? undefined : { duration: 28, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            Save<br />the date
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#details"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-[9px] uppercase tracking-[0.22em] text-ink/80 transition hover:text-gold sm:flex"
      >
        Discover
        <ArrowDown className="h-4 w-4 animate-gentle-bounce" aria-hidden="true" />
      </a>
    </header>
  )
}
