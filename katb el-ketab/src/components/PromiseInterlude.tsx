import { motion } from 'framer-motion'
import { invitation } from '../data/invitation'
import { GildedMotes, OrnamentalDivider, RoyalCrest } from './RoyalOrnaments'

export function PromiseInterlude() {
  return (
    <section className="royal-interlude relative isolate overflow-hidden bg-espresso px-5 py-24 text-linen sm:px-8 sm:py-32">
      <div className="royal-damask absolute inset-0 -z-20 opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_42%,rgba(216,189,139,.14),transparent_36%)]" aria-hidden="true" />
      <GildedMotes />

      <motion.div
        className="relative mx-auto max-w-4xl px-6 py-12 text-center sm:px-14 sm:py-16"
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

        <RoyalCrest className="mx-auto h-28 w-32 text-champagne sm:h-32 sm:w-36" />
        <p className="eyebrow mt-5 text-champagne">Our promise</p>
        <h2 className="mx-auto mt-5 max-w-3xl font-display text-5xl font-medium leading-[0.94] text-linen sm:text-6xl lg:text-7xl">
          Two hearts, one beautiful forever.
        </h2>
        <OrnamentalDivider className="mx-auto mt-8 h-8 w-52 text-champagne/70 sm:w-64" />
        <p className="mx-auto mt-6 max-w-2xl font-display text-2xl italic leading-relaxed text-linen/75 sm:text-3xl">
          Side by side, hand in hand, we begin the sweetest chapter of our story.
        </p>
        <p className="mt-7 text-[9px] uppercase tracking-[0.3em] text-champagne/75">
          {invitation.couple.shortGroom} <span className="px-2 font-display text-sm italic">&amp;</span> {invitation.couple.shortBride}
        </p>
      </motion.div>
    </section>
  )
}
