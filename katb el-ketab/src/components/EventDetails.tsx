import { motion } from 'framer-motion'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { invitation } from '../data/invitation'
import { TiaraMark } from './FairytaleOrnaments'
import { RoyalCrest } from './RoyalOrnaments'
import { SectionHeading } from './SectionHeading'

const detailItems = [
  { icon: CalendarDays, label: 'The date', value: invitation.event.dateLabel },
  { icon: Clock3, label: 'The time', value: invitation.event.timeLabel },
  { icon: MapPin, label: 'The place', value: invitation.event.venue },
]

export function EventDetails() {
  return (
    <section id="details" className="section-shell relative overflow-hidden bg-linen">
      <div className="ornament-dot left-[8%] top-24" aria-hidden="true" />
      <div className="ornament-dot bottom-20 right-[12%]" aria-hidden="true" />
      <SectionHeading
        eyebrow="Chapter I · The promise"
        title="The day our next chapter begins"
        subtitle="With the blessing of our families, we invite you to witness our sacred promise and the beginning of a lifetime together."
      />

      <motion.div
        className="engraved-card relative isolate mx-auto mt-14 max-w-5xl overflow-hidden border border-gold/35 bg-ivory px-6 py-14 shadow-[0_20px_70px_rgba(70,58,50,.07)] sm:px-10 sm:py-16 lg:px-16"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <div className="paper-field absolute inset-0 -z-20" aria-hidden="true" />
        <RoyalCrest className="absolute left-1/2 top-1/2 -z-10 h-[360px] w-[410px] -translate-x-1/2 -translate-y-1/2 text-gold/[0.04]" />
        <div className="absolute inset-2 border border-gold/15" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--tl !text-gold/60" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--tr !text-gold/60" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--bl !text-gold/60" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--br !text-gold/60" aria-hidden="true" />
        <TiaraMark className="mx-auto h-10 w-28 text-gold/70" />
        <p className="text-center font-display text-3xl italic text-gold sm:text-4xl">{invitation.event.name}</p>
        <p className="mt-3 text-center text-[10px] uppercase leading-5 tracking-[0.25em] text-ink/80">A promise witnessed by those we love</p>
        <div className="mx-auto mt-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="mt-10 grid gap-9 md:grid-cols-3 md:gap-0">
          {detailItems.map(({ icon: Icon, label, value }, index) => (
            <div
              className={`px-3 text-center ${index > 0 ? 'md:border-l md:border-espresso/10' : ''}`}
              key={label}
            >
              <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-gold/35 bg-linen/70 text-gold shadow-[inset_0_0_0_4px_rgba(145,101,44,.05)]">
                <Icon className="h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
              </span>
              <p className="eyebrow mt-4 text-ink/80">{label}</p>
              <p className="mx-auto mt-3 max-w-[230px] font-display text-2xl leading-tight text-espresso sm:text-[1.65rem]">
                {value}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
