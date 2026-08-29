import { MailOpen } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { invitation } from '../data/invitation'
import { BotanicalMark } from './BotanicalMark'
import { GildedMotes, OrnamentalDivider, RoyalCrest } from './RoyalOrnaments'

type OpeningScreenProps = {
  guestName: string
  isPersonalized: boolean
  isClosing: boolean
  isPreparing: boolean
  error: string
  onOpen: () => void
}

export function OpeningScreen({ guestName, isPersonalized, isClosing, isPreparing, error, onOpen }: OpeningScreenProps) {
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
          src={invitation.images.couple.src}
          srcSet={invitation.images.couple.srcSet}
          sizes="100vw"
          width={invitation.images.couple.width}
          height={invitation.images.couple.height}
          alt=""
          className="opening-photo h-full w-full scale-110 object-cover object-[62%_42%] blur-[7px]"
          aria-hidden="true"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(29,23,19,.63),rgba(29,23,19,.88))]" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(216,189,139,.17),transparent_42%)]" />
      <div className="royal-damask absolute inset-0 -z-10 opacity-20" aria-hidden="true" />
      <GildedMotes />

      <BotanicalMark className="absolute -left-5 top-8 h-56 text-champagne/20 sm:left-8 sm:h-64" />
      <BotanicalMark className="absolute -right-5 bottom-8 h-56 text-champagne/20 sm:right-8 sm:h-64" mirrored />

      <div className="opening-card relative w-full max-w-[550px] px-6 py-9 text-center sm:px-12 sm:py-12">
        <div className="absolute inset-0 border border-champagne/45" aria-hidden="true" />
        <div className="absolute inset-2 border border-linen/15" aria-hidden="true" />
        <span className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-champagne" />
        <span className="engraved-corner engraved-corner--tl" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--tr" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--bl" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--br" aria-hidden="true" />

        <RoyalCrest className="opening-crest animate-monogram-sway mx-auto h-28 w-32 text-champagne sm:h-32 sm:w-36" />

        <p className="eyebrow mt-4 text-champagne">A celebration of love</p>
        <OrnamentalDivider className="mx-auto mt-4 h-6 w-40 text-champagne/70" />
        <h1
          id="invitation-title"
          className="mt-4 font-display text-5xl font-normal leading-none sm:text-6xl"
        >
          {invitation.couple.shortGroom} <span className="font-normal italic text-champagne">&amp;</span> {invitation.couple.shortBride}
        </h1>
        <p className="mt-4 font-editorial text-base italic text-linen/75 sm:text-lg">invite you to celebrate their Katb El-Ketab</p>
        <p className="mt-7 text-[10px] uppercase leading-5 tracking-[0.25em] text-champagne/70">The honour of your presence is requested</p>

        <p className="mt-5 text-xs font-light tracking-wide text-linen/70">
          {isPersonalized ? 'Especially for' : 'With love, for our'}
        </p>
        <p className="mx-auto mt-1 max-w-md break-words font-display text-2xl leading-tight text-linen [overflow-wrap:anywhere]">{guestName}</p>

        <button
          type="button"
          className="button-primary relative mt-8 aria-disabled:cursor-wait aria-disabled:opacity-60"
          onClick={onOpen}
          aria-disabled={isPreparing || isClosing}
        >
          <MailOpen className="h-4 w-4" aria-hidden="true" />
          {isPreparing ? 'Preparing invitation…' : 'Open invitation'}
        </button>
        {error && <p className="mx-auto mt-4 max-w-sm text-xs leading-5 text-red-100" role="alert">{error}</p>}
        <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-linen/65">Music can be played after opening</p>
      </div>
    </div>
  )
}
