import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'
import { invitation } from '../data/invitation'
import { SectionHeading } from './SectionHeading'

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

const units: Array<{ key: keyof TimeLeft; label: string }> = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

function calculateTimeLeft(target: number): TimeLeft {
  const distance = Math.max(0, target - Date.now())
  return {
    days: Math.floor(distance / 86_400_000),
    hours: Math.floor((distance % 86_400_000) / 3_600_000),
    minutes: Math.floor((distance % 3_600_000) / 60_000),
    seconds: Math.floor((distance % 60_000) / 1_000),
  }
}

function CountdownValue({ value }: { value: number }) {
  const formatted = String(value).padStart(2, '0')
  const reduceMotion = useReducedMotion()
  return (
    <div className="relative h-[1.05em] overflow-hidden font-display text-5xl leading-none text-linen sm:text-6xl lg:text-7xl">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={formatted}
          className="absolute inset-0 grid place-items-center"
          initial={reduceMotion ? false : { y: '55%', opacity: 0, filter: 'blur(5px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          exit={reduceMotion ? undefined : { y: '-55%', opacity: 0, filter: 'blur(5px)' }}
          transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {formatted}
        </motion.span>
      </AnimatePresence>
    </div>
  )
}

export function Countdown() {
  const target = useMemo(() => new Date(invitation.event.isoDate).getTime(), [])
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(target))

  useEffect(() => {
    const interval = window.setInterval(() => setTimeLeft(calculateTimeLeft(target)), 1_000)
    return () => window.clearInterval(interval)
  }, [target])

  const spokenTime = units.map(({ key, label }) => `${timeLeft[key]} ${label}`).join(', ')

  return (
    <section className="relative isolate overflow-hidden bg-espresso px-5 py-24 text-linen sm:px-8 sm:py-32">
      <div className="absolute inset-0 -z-20 opacity-[0.13]">
        <img
          src="/images/couple-960.webp"
          alt=""
          className="h-full w-full scale-110 object-cover object-[62%_42%] blur-[5px] grayscale"
          loading="lazy"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-espresso/90" />
      <div className="royal-damask absolute inset-0 -z-10 opacity-10" aria-hidden="true" />
      <div className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2 bg-champagne" />

      <SectionHeading
        eyebrow="Until we celebrate"
        title="Counting every moment"
        subtitle={`${invitation.event.dateLabel} at ${invitation.event.timeLabel}`}
        inverted
      />

      <div className="sr-only" role="timer" aria-live="off" aria-label={`Time remaining: ${spokenTime}`} />
      <motion.div
        className="countdown-frame relative mx-auto mt-14 grid max-w-5xl grid-cols-2 border border-champagne/30 p-2 sm:grid-cols-4"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.8 }}
        aria-hidden="true"
      >
        {units.map(({ key, label }, index) => (
          <div
            key={key}
            className={`countdown-panel relative bg-linen/[0.025] px-3 py-9 text-center sm:py-11 ${
              index % 2 === 1 ? 'border-l border-linen/15' : ''
            } ${index >= 2 ? 'border-t border-linen/15 sm:border-t-0' : ''} ${
              index > 0 ? 'sm:border-l sm:border-linen/15' : ''
            }`}
          >
            <span className="absolute left-1/2 top-4 h-1.5 w-1.5 -translate-x-1/2 rotate-45 border border-champagne/45" aria-hidden="true" />
            <CountdownValue value={timeLeft[key]} />
            <p className="mt-3 text-[9px] uppercase tracking-[0.28em] text-champagne/75">{label}</p>
          </div>
        ))}
      </motion.div>
      <p className="mt-9 text-center font-display text-2xl italic text-linen/70">Time left until we meet</p>
    </section>
  )
}
