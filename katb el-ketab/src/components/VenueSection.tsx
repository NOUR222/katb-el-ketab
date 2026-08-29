import { motion } from 'framer-motion'
import { ExternalLink, MapPin } from 'lucide-react'
import { invitation } from '../data/invitation'
import { BotanicalMark } from './BotanicalMark'

export function VenueSection() {
  return (
    <section id="venue" className="relative overflow-hidden bg-linen px-5 py-24 sm:px-8 sm:py-32 lg:px-14">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
        <motion.div
          className="relative mx-auto w-full max-w-[560px]"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -bottom-5 -right-4 h-full w-[88%] border border-gold/35 sm:-right-7" />
          <div className="relative aspect-[4/5] overflow-hidden bg-parchment shadow-editorial">
            <img
              src={invitation.images.venue.src}
              srcSet={invitation.images.venue.srcSet}
              sizes="(min-width: 1024px) 44vw, 90vw"
              width={invitation.images.venue.width}
              height={invitation.images.venue.height}
              alt={invitation.images.venue.alt}
              className="h-full w-full object-cover object-[50%_30%] saturate-[0.86]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(247,243,235,.04),rgba(84,57,35,.18))]" />
          </div>
          <div className="absolute -bottom-8 left-5 bg-espresso px-6 py-4 text-linen shadow-float sm:left-8 sm:px-8">
            <p className="eyebrow text-champagne">Alexandria</p>
            <p className="mt-1 font-display text-2xl">Open air · 7:00 PM</p>
          </div>
        </motion.div>

        <motion.div
          className="relative text-center lg:text-left"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          <BotanicalMark className="absolute -right-20 -top-20 hidden h-52 text-gold/12 lg:block" mirrored />
          <p className="eyebrow text-gold">The venue</p>
          <h2 className="mt-5 font-display text-5xl font-medium leading-[0.94] text-espresso sm:text-6xl lg:text-7xl">
            Al Mowasah<br />Open Air
          </h2>
          <p className="mx-auto mt-7 max-w-lg text-sm font-light leading-7 text-ink/80 lg:mx-0">
            Beneath the open sky, surrounded by the people we cherish most — this is where our next chapter begins.
          </p>

          <div className="mx-auto mt-8 flex max-w-md items-start justify-center gap-4 border-y border-espresso/10 py-6 text-left lg:mx-0 lg:justify-start">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold" strokeWidth={1.4} aria-hidden="true" />
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-ink/80">Address</p>
              <address className="mt-1 not-italic font-display text-xl leading-snug text-espresso">
                {invitation.event.address}
              </address>
            </div>
          </div>

          <a
            href={invitation.event.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary mt-8"
          >
            Open in Google Maps
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
