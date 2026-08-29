import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { storyChapters } from '../data/invitation'
import { OrnamentalDivider, RoyalCrest } from './RoyalOrnaments'
import { SectionHeading } from './SectionHeading'

export function StoryTimeline() {
  return (
    <section id="story" className="section-shell relative overflow-hidden bg-ivory">
      <div className="absolute left-0 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl" aria-hidden="true" />
      <RoyalCrest className="absolute -right-32 bottom-10 h-[420px] w-[480px] text-gold/[0.035]" />
      <SectionHeading
        eyebrow="Chapter II · The story so far"
        title="Written in quiet moments"
        subtitle="Not every love story begins with grand words. Some are written gently—in laughter, patience, and the comfort of being known."
      />

      <div className="storybook-spread relative mx-auto mt-16 max-w-6xl overflow-hidden border border-gold/30 bg-linen px-5 py-12 sm:px-10 sm:py-16 lg:mt-20 lg:px-14">
        <div className="paper-field pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-2 border border-gold/10" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--tl !text-gold/50" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--tr !text-gold/50" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--bl !text-gold/50" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--br !text-gold/50" aria-hidden="true" />
        <p className="relative text-center text-[9px] uppercase tracking-[0.28em] text-gold">From the illuminated pages of our story</p>

        <div className="relative mt-12">
          <motion.div
            className="absolute left-[22px] top-4 h-[calc(100%-2rem)] w-px origin-top bg-gold/30 lg:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-0 top-[39px] hidden h-px w-full origin-left bg-gold/30 lg:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <div className="grid gap-11 lg:grid-cols-3 lg:gap-10">
            {storyChapters.map((chapter, index) => (
              <motion.article
                key={chapter.title}
                className="relative grid grid-cols-[46px_1fr] gap-5 lg:block lg:pt-20 lg:text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.12, duration: 0.7 }}
              >
                <div className="story-medallion relative z-10 grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-ivory font-display text-sm text-gold lg:absolute lg:left-1/2 lg:top-[17px] lg:-translate-x-1/2">
                  <span aria-hidden="true">✦</span>
                </div>
                <div className="illuminated-chapter relative pt-1 lg:pt-0">
                  <Heart className="mb-4 hidden h-4 w-4 text-gold/55 lg:mx-auto lg:block" strokeWidth={1.2} aria-hidden="true" />
                  <h3 className="font-display text-3xl font-medium text-espresso sm:text-4xl">{chapter.title}</h3>
                  <p className="mt-4 text-sm font-light leading-7 text-ink/80">{chapter.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="relative mx-auto mt-16 max-w-3xl px-7 py-10 text-center sm:px-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
          <OrnamentalDivider className="mx-auto h-7 w-44 text-gold/65" />
          <blockquote className="mt-5 font-display text-3xl italic leading-tight text-espresso sm:text-4xl">
            “What began between two hearts now opens into a life we will write together.”
          </blockquote>
          <div className="absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/45 to-transparent" />
        </motion.div>
        <p className="relative mt-9 text-center text-[9px] uppercase tracking-[0.3em] text-ink/75">N &amp; R · Our illuminated story</p>
      </div>
    </section>
  )
}
