import { AnimatePresence, motion } from 'framer-motion'
import { Check, Heart, Send } from 'lucide-react'
import { type FormEvent, useState } from 'react'
import { invitation } from '../data/invitation'
import { submitRsvp } from '../services/rsvp'
import { SectionHeading } from './SectionHeading'

type RsvpSectionProps = {
  guestName: string
  isPersonalized: boolean
}

export function RsvpSection({ guestName, isPersonalized }: RsvpSectionProps) {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [attendance, setAttendance] = useState<'yes' | 'no'>('yes')
  const [error, setError] = useState('')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setSubmitting(true)
    setError('')

    try {
      await submitRsvp({
        name: String(formData.get('name') ?? ''),
        guests: attendance === 'yes' ? Number(formData.get('guests') ?? 1) : 0,
        attendance,
        message: String(formData.get('message') ?? ''),
        submittedAt: new Date().toISOString(),
      })
      setSubmitted(true)
      form.reset()
    } catch {
      setError('We could not send your reply. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="rsvp" className="relative isolate overflow-hidden bg-espresso px-5 py-24 text-linen sm:px-8 sm:py-32">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_10%,rgba(216,189,139,.12),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(216,189,139,.08),transparent_28%)]" />
      <SectionHeading
        eyebrow="Kindly reply"
        title="Will you join us?"
        subtitle="Your presence would make our celebration complete. Please let us know if you can be there."
        inverted
      />

      <motion.div
        className="mx-auto mt-14 max-w-3xl border border-champagne/25 bg-linen/[0.045] p-6 backdrop-blur-sm sm:p-10 lg:p-12"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.18 }}
        transition={{ duration: 0.8 }}
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="grid min-h-[430px] place-items-center text-center"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div>
                <div className="mx-auto grid h-20 w-20 place-items-center rounded-full border border-champagne/50 text-champagne">
                  <Check className="h-8 w-8" strokeWidth={1.2} aria-hidden="true" />
                </div>
                <h3 className="mt-7 font-display text-4xl text-linen sm:text-5xl">Thank you</h3>
                <p className="mx-auto mt-4 max-w-md text-sm font-light leading-7 text-linen/70">
                  {attendance === 'yes'
                    ? 'Your reply has been received in this preview. We cannot wait to celebrate this beautiful day with you.'
                    : 'Thank you for letting us know. You will be in our thoughts as we celebrate this beautiful day.'}
                </p>
                <button type="button" className="button-ghost mt-8" onClick={() => setSubmitted(false)}>
                  Send another response
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={onSubmit} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="field-label sm:col-span-2">
                  Name
                  <input
                    className="field-input"
                    type="text"
                    name="name"
                    defaultValue={isPersonalized ? guestName : ''}
                    placeholder="Your name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label className="field-label">
                  Number of guests
                  <select className="field-input appearance-none" name="guests" defaultValue="1" disabled={attendance === 'no'}>
                    {[1, 2, 3, 4, 5, 6].map((number) => (
                      <option key={number} value={number} className="text-espresso">
                        {number}
                      </option>
                    ))}
                  </select>
                </label>

                <fieldset>
                  <legend className="field-label mb-3">Will you attend?</legend>
                  <div className="grid grid-cols-2 gap-3">
                    {([
                      ['yes', 'Joyfully, yes'],
                      ['no', 'Sadly, no'],
                    ] as const).map(([value, label]) => (
                      <label
                        key={value}
                        className={`cursor-pointer border px-3 py-[14px] text-center text-xs transition focus-within:outline focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-champagne ${
                          attendance === value
                            ? 'border-champagne bg-champagne text-espresso'
                            : 'border-linen/20 text-linen/70 hover:border-champagne/55'
                        }`}
                      >
                        <input
                          className="sr-only"
                          type="radio"
                          name="attendance"
                          value={value}
                          checked={attendance === value}
                          onChange={() => setAttendance(value)}
                        />
                        {label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="field-label sm:col-span-2">
                  A note for the couple <span className="normal-case tracking-normal text-linen/55">(optional)</span>
                  <textarea
                    className="field-input min-h-32 resize-y"
                    name="message"
                    placeholder="Share your wishes..."
                    maxLength={500}
                  />
                </label>
              </div>

              <button type="submit" className="button-primary mt-8 w-full justify-center" disabled={submitting}>
                {submitting ? 'Sending…' : 'Send RSVP'}
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
              {error && <p className="mt-4 text-center text-xs text-red-200" role="alert">{error}</p>}
              <p className="mt-4 text-center text-[10px] leading-5 text-linen/60">
                Preview mode: responses are logged locally until a backend is connected.
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </motion.div>

      <div className="mx-auto mt-16 flex max-w-xl items-center gap-5 text-champagne/45" aria-hidden="true">
        <span className="h-px flex-1 bg-current" />
        <Heart className="h-4 w-4" strokeWidth={1} />
        <span className="h-px flex-1 bg-current" />
      </div>
      <p className="mt-6 text-center font-display text-2xl italic text-linen/65">
        {invitation.couple.shortGroom} & {invitation.couple.shortBride}
      </p>
    </section>
  )
}
