import { motion } from 'framer-motion'
import { CalendarDays, Clock3, MapPin } from 'lucide-react'
import { invitation } from '../data/invitation'
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
        eyebrow="Save the date"
        title="A sacred promise, a beautiful beginning."
        subtitle="Please join us as we celebrate our Katb El-Ketab and step into a lifetime together."
      />

      <motion.div
        className="relative mx-auto mt-14 max-w-5xl border border-gold/25 bg-ivory px-6 py-12 shadow-[0_20px_70px_rgba(70,58,50,.07)] sm:px-10 lg:px-16"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        <span className="absolute left-4 top-4 h-8 w-8 border-l border-t border-gold/50" />
        <span className="absolute bottom-4 right-4 h-8 w-8 border-b border-r border-gold/50" />
        <p className="text-center font-display text-3xl italic text-gold sm:text-4xl">{invitation.event.name}</p>
        <div className="mx-auto mt-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
        <div className="mt-9 grid gap-8 md:grid-cols-3 md:gap-0">
          {detailItems.map(({ icon: Icon, label, value }, index) => (
            <div
              className={`px-3 text-center ${index > 0 ? 'md:border-l md:border-espresso/10' : ''}`}
              key={label}
            >
              <Icon className="mx-auto h-5 w-5 text-gold" strokeWidth={1.35} aria-hidden="true" />
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
