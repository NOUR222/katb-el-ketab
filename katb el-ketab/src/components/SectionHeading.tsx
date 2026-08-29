import { motion } from 'framer-motion'
import { OrnamentalDivider } from './RoyalOrnaments'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  inverted?: boolean
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  inverted = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left'}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      <p className={`eyebrow ${inverted ? 'text-champagne' : 'text-gold'}`}>{eyebrow}</p>
      <OrnamentalDivider
        className={`mx-auto mt-4 h-6 w-36 sm:w-44 ${inverted ? 'text-champagne/65' : 'text-gold/65'}`}
      />
      <h2
        className={`mt-4 font-display text-5xl font-medium leading-[0.95] sm:text-6xl lg:text-7xl ${
          inverted ? 'text-linen' : 'text-espresso'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-6 text-sm font-light leading-7 sm:text-base ${
            inverted ? 'text-linen/65' : 'text-ink/80'
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
