import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { storyChapters } from '../data/invitation'
import { SectionHeading } from './SectionHeading'

export function StoryTimeline() {
  return (
    <section id="story" className="section-shell relative overflow-hidden bg-ivory">
      <div className="absolute left-0 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl" aria-hidden="true" />
      <SectionHeading
        eyebrow="Our story"
        title="From this day forward"
        subtitle="The sweetest stories are written slowly — in ordinary days, shared dreams, and a thousand little moments of choosing one another."
      />

      <div className="relative mx-auto mt-16 max-w-6xl lg:mt-20">
        <div className="absolute left-[22px] top-4 h-[calc(100%-2rem)] w-px bg-gold/30 lg:left-0 lg:top-[39px] lg:h-px lg:w-full" aria-hidden="true" />
        <div className="grid gap-11 lg:grid-cols-3 lg:gap-10">
          {storyChapters.map((chapter, index) => (
            <motion.article
              key={chapter.marker}
              className="relative grid grid-cols-[46px_1fr] gap-5 lg:block lg:pt-20 lg:text-center"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
            >
              <div className="relative z-10 grid h-11 w-11 place-items-center rounded-full border border-gold/50 bg-ivory font-display text-sm text-gold lg:absolute lg:left-1/2 lg:top-[17px] lg:-translate-x-1/2">
                {chapter.marker}
              </div>
              <div className="pt-1 lg:pt-0">
                <Heart className="mb-4 hidden h-4 w-4 text-gold/55 lg:mx-auto lg:block" strokeWidth={1.2} aria-hidden="true" />
                <h3 className="font-display text-3xl font-medium text-espresso sm:text-4xl">{chapter.title}</h3>
                <p className="mt-4 text-sm font-light leading-7 text-ink/80">{chapter.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.blockquote
        className="mx-auto mt-20 max-w-3xl text-center font-display text-3xl italic leading-tight text-espresso sm:text-4xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        “And suddenly, every love song was about you.”
      </motion.blockquote>
    </section>
  )
}
