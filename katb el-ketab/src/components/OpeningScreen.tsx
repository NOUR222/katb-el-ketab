import { MailOpen, Sparkles } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { BotanicalMark } from './BotanicalMark'

type OpeningScreenProps = {
  guestName: string
  isPersonalized: boolean
  isClosing: boolean
  onOpen: () => void
}

export function OpeningScreen({ guestName, isPersonalized, isClosing, onOpen }: OpeningScreenProps) {
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    dialogRef.current?.focus({ preventScroll: true })
  }, [])

  return (
    <div
      ref={dialogRef}
      className={`opening-screen fixed inset-0 z-[100] isolate grid min-h-[100svh] place-items-center overflow-x-hidden overflow-y-auto bg-espresso px-5 py-8 text-linen ${
        isClosing ? 'opening-screen--closing' : ''
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="invitation-title"
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        event.preventDefault()
        event.currentTarget.querySelector<HTMLButtonElement>('button')?.focus()
      }}
    >
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <img
          src="/images/couple-960.webp"
          alt=""
          className="h-full w-full scale-110 object-cover object-[62%_42%] blur-[7px]"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(29,23,19,.63),rgba(29,23,19,.88))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(216,189,139,.17),transparent_42%)]" />

      <BotanicalMark className="absolute -left-4 top-8 h-52 text-champagne/25 sm:left-8" />
      <BotanicalMark className="absolute -right-4 bottom-8 h-52 text-champagne/25 sm:right-8" mirrored />

      <div className="relative w-full max-w-[520px] px-6 py-10 text-center sm:px-12 sm:py-14">
        <div className="absolute inset-0 border border-champagne/45" />
        <div className="absolute inset-2 border border-linen/15" />
        <span className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-champagne" />

        <div className="animate-monogram-sway relative mx-auto grid h-20 w-20 place-items-center rounded-full border border-champagne/50 font-display text-3xl text-champagne">
          N <span className="absolute text-xs text-linen/60">&</span> R
        </div>

        <p className="eyebrow mt-8 text-champagne">A celebration of love</p>
        <h1
          id="invitation-title"
          className="mt-5 text-5xl font-normal leading-none sm:text-6xl"
          style={{ fontFamily: 'Georgia, Cambria, "Times New Roman", serif' }}
        >
          Noureldin <span className="font-normal text-champagne">&</span> Rana
        </h1>
        <p className="mt-4 font-editorial text-base italic text-linen/75 sm:text-lg">invite you to their Katb El-Ketab</p>

        <div className="mx-auto my-8 flex max-w-xs items-center gap-4 text-champagne/55">
          <span className="h-px flex-1 bg-current" />
          <Sparkles className="h-3.5 w-3.5" strokeWidth={1.3} />
          <span className="h-px flex-1 bg-current" />
        </div>

        <p className="text-xs font-light tracking-wide text-linen/70">
          {isPersonalized ? 'Especially for' : 'With love, for our'}
        </p>
        <p className="mt-1 font-display text-2xl text-linen">{guestName}</p>

        <button
          type="button"
          className="button-primary relative mt-9"
          onClick={onOpen}
        >
          <MailOpen className="h-4 w-4" aria-hidden="true" />
          Open invitation
        </button>
        <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-linen/65">Music will begin after opening</p>
      </div>
    </div>
  )
}
