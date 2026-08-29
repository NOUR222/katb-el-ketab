import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { invitation } from '../data/invitation'
import { MagicTrail, PalaceSilhouette, TiaraMark } from './FairytaleOrnaments'
import { GildedMotes, OrnamentalDivider, StarlightField } from './RoyalOrnaments'

export function PromiseInterlude() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section ref={sectionRef} className="royal-interlude relative isolate overflow-hidden bg-espresso px-5 py-24 text-linen sm:px-8 sm:py-32">
      <div className="royal-damask absolute inset-0 -z-20 opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(216,189,139,.14),transparent_36%)]" aria-hidden="true" />
      <PalaceSilhouette className="pointer-events-none absolute -bottom-1 left-1/2 -z-10 h-48 w-[130%] -translate-x-1/2 text-champagne/25 sm:h-64" />
      {isInView && (
        <>
          <MagicTrail className="pointer-events-none absolute -left-20 top-5 z-0 h-48 w-80 -scale-x-100 text-champagne/30" />
          <GildedMotes />
          <StarlightField className="z-0 text-champagne/70" density="sparse" />
        </>
      )}

      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-6 py-12 text-center sm:px-14 sm:py-16"
        initial={{ opacity: 0, scale: 0.975 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 border border-champagne/25" aria-hidden="true" />
        <div className="absolute inset-2 border border-linen/10" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--tl" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--tr" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--bl" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--br" aria-hidden="true" />

        <TiaraMark className="mx-auto h-16 w-40 text-champagne sm:h-20 sm:w-48" />
        <p className="eyebrow mt-5 text-champagne">A page for {invitation.couple.shortBride}</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-medium leading-[1] text-linen sm:text-5xl lg:text-6xl">
          {invitation.couple.shortBride}, every page ahead feels brighter because we will write it together.
        </h2>
        <OrnamentalDivider className="mx-auto mt-8 h-8 w-52 text-champagne/70 sm:w-64" />
        <p className="mx-auto mt-6 max-w-2xl font-display text-2xl italic leading-relaxed text-linen/75 sm:text-3xl">
          I promise to honour your heart, protect your joy, and make our life together worthy of the love you have given me.
        </p>
        <p className="mt-7 text-[10px] uppercase tracking-[0.28em] text-champagne/80">
          With all my heart <span className="px-2 font-display text-base italic">·</span> {invitation.couple.shortGroom}
        </p>
      </motion.div>
    </section>
  )
}
