import { MailOpen } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { invitation } from '../data/invitation'
import { BotanicalMark } from './BotanicalMark'
import { EnchantedPalaceScene } from './EnchantedPalaceScene'
import { MagicTrail, PalaceSilhouette, TiaraMark } from './FairytaleOrnaments'
import { GildedMotes, OrnamentalDivider, RoyalCrest, StarlightField } from './RoyalOrnaments'

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
  const enterButtonRef = useRef<HTMLButtonElement>(null)
  const skipButtonRef = useRef<HTMLButtonElement>(null)
  const [preludePhase, setPreludePhase] = useState<'visible' | 'leaving' | 'done'>(() =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'done' : 'visible',
  )
  const isPreludeActive = preludePhase !== 'done'

  useEffect(() => {
    dialogRef.current?.focus({ preventScroll: true })
  }, [])

  useEffect(() => {
    if (preludePhase !== 'visible') return

    const revealTimer = window.setTimeout(() => setPreludePhase('leaving'), 4600)
    return () => window.clearTimeout(revealTimer)
  }, [preludePhase])

  useEffect(() => {
    if (preludePhase !== 'leaving') return
    const shouldTransferFocus = document.activeElement === skipButtonRef.current
    if (shouldTransferFocus) dialogRef.current?.focus({ preventScroll: true })

    const finishTimer = window.setTimeout(() => {
      setPreludePhase('done')
      if (shouldTransferFocus) {
        window.requestAnimationFrame(() => enterButtonRef.current?.focus({ preventScroll: true }))
      }
    }, 750)
    return () => window.clearTimeout(finishTimer)
  }, [preludePhase])

  const skipPrelude = () => {
    setPreludePhase('done')
    window.requestAnimationFrame(() => enterButtonRef.current?.focus())
  }

  return (
    <div
      ref={dialogRef}
      className={`opening-screen fixed inset-0 z-[100] isolate grid min-h-[100svh] place-items-center overflow-x-hidden overflow-y-auto bg-espresso px-5 py-8 text-linen ${
        isClosing ? 'opening-screen--closing' : ''
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby={isPreludeActive ? 'prelude-title' : 'invitation-title'}
      tabIndex={-1}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        event.preventDefault()
        if (preludePhase === 'visible') skipButtonRef.current?.focus()
        else if (preludePhase === 'done') enterButtonRef.current?.focus()
        else dialogRef.current?.focus({ preventScroll: true })
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
      {!isPreludeActive && <StarlightField className="opening-starlight z-[1] text-champagne" />}
      {!isPreludeActive && <GildedMotes />}
      <div className="opening-gateway-glow" aria-hidden="true" />

      <div className="fairytale-curtain fairytale-curtain--left" aria-hidden="true" />
      <div className="fairytale-curtain fairytale-curtain--right" aria-hidden="true" />
      {!isPreludeActive && (
        <PalaceSilhouette className="opening-palace pointer-events-none absolute -bottom-1 left-1/2 z-0 h-48 w-[min(1100px,145vw)] -translate-x-1/2 text-champagne/30 sm:h-60" />
      )}
      {!isPreludeActive && (
        <MagicTrail className="pointer-events-none absolute right-[-0.5rem] top-4 z-[1] h-40 w-64 text-champagne/40 sm:right-[3%] sm:top-[5%] sm:h-48 sm:w-80" />
      )}

      <BotanicalMark className="absolute -left-5 top-8 z-[1] h-56 text-champagne/20 sm:left-8 sm:h-64" />
      <BotanicalMark className="absolute -right-5 bottom-8 z-[1] h-56 text-champagne/20 sm:right-8 sm:h-64" mirrored />

      {isPreludeActive && (
        <div
          className={`royal-prelude absolute inset-0 z-30 grid place-items-center overflow-x-hidden overflow-y-auto px-6 py-8 text-center ${
            preludePhase === 'leaving' ? 'royal-prelude--leaving' : ''
          }`}
        >
          <div className="royal-prelude__sky-glow" aria-hidden="true" />
          <div className="royal-prelude__moon" aria-hidden="true"><span /></div>
          <StarlightField className="z-[1] text-champagne" />
          <MagicTrail className="royal-prelude__trail pointer-events-none absolute -left-12 top-[8%] h-44 w-72 -scale-x-100 text-champagne/45 sm:left-[6%] sm:h-52 sm:w-80" />
          <GildedMotes className="royal-prelude__motes" />
          <div className="royal-prelude__mist royal-prelude__mist--far" aria-hidden="true" />
          <div className="royal-prelude__mist royal-prelude__mist--near" aria-hidden="true" />
          <EnchantedPalaceScene className="royal-prelude__palace pointer-events-none absolute -bottom-1 left-1/2 h-[44svh] min-h-[260px] w-[min(1280px,172vw)] -translate-x-1/2 text-champagne sm:h-[50svh] sm:min-h-[330px] sm:w-[min(1280px,132vw)]" />

          <div className="royal-prelude__content relative z-10">
            <p className="eyebrow text-champagne">Before the first page</p>
            <TiaraMark className="royal-prelude__tiara mx-auto mt-5 h-16 w-40 text-champagne sm:h-20 sm:w-48" />
            <h1 id="prelude-title" className="royal-prelude__monogram mt-2 font-display text-[clamp(4.5rem,22vw,8rem)] font-normal leading-none tracking-[-0.06em] text-linen">
              {invitation.couple.shortGroom.charAt(0)} <span className="px-2 text-[0.4em] italic text-champagne">&amp;</span> {invitation.couple.shortBride.charAt(0)}
            </h1>
            <OrnamentalDivider className="royal-prelude__divider mx-auto mt-4 h-7 w-52 text-champagne/75 sm:w-64" />
            <p className="royal-prelude__copy mx-auto mt-4 max-w-lg font-editorial text-lg italic leading-relaxed tracking-wide text-linen/85 sm:text-xl">
              Under an October sky, two hearts prepare to make one promise.
            </p>
          </div>

          <button
            ref={skipButtonRef}
            type="button"
            className="royal-prelude__skip absolute right-[max(1rem,env(safe-area-inset-right))] top-[max(1rem,env(safe-area-inset-top))] z-20 min-h-11 border border-linen/15 bg-espresso/25 px-4 text-[9px] uppercase tracking-[0.22em] text-linen/75 transition hover:border-champagne/50 hover:text-champagne focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne"
            onClick={skipPrelude}
            tabIndex={preludePhase === 'visible' ? 0 : -1}
          >
            Skip intro
          </button>
        </div>
      )}

      <p className="sr-only" aria-live="polite">
        {preludePhase === 'done' ? 'Invitation ready to open.' : ''}
      </p>

      <div
        className={`opening-card relative z-10 w-full max-w-[560px] px-6 py-9 text-center sm:px-12 sm:py-12 ${
          preludePhase === 'visible' ? 'opening-card--waiting' : 'opening-card--revealed'
        }`}
        inert={isPreludeActive}
        aria-hidden={isPreludeActive}
      >
        <div className="absolute inset-0 border border-champagne/45" aria-hidden="true" />
        <div className="absolute inset-2 border border-linen/15" aria-hidden="true" />
        <span className="absolute left-1/2 top-0 h-px w-20 -translate-x-1/2 bg-champagne" />
        <span className="engraved-corner engraved-corner--tl" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--tr" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--bl" aria-hidden="true" />
        <span className="engraved-corner engraved-corner--br" aria-hidden="true" />
        <TiaraMark className="absolute -top-7 left-1/2 h-12 w-28 -translate-x-1/2 text-champagne" />

        <RoyalCrest className="opening-crest animate-monogram-sway mx-auto h-28 w-32 text-champagne sm:h-32 sm:w-36" />

        <p className="eyebrow mt-4 text-champagne">An invitation written with love</p>
        <OrnamentalDivider className="mx-auto mt-4 h-6 w-40 text-champagne/70" />
        <h1
          id="invitation-title"
          className="mt-4 font-display text-5xl font-normal leading-none sm:text-6xl"
        >
          {invitation.couple.shortGroom} <span className="font-normal italic text-champagne">&amp;</span> {invitation.couple.shortBride}
        </h1>
        <p className="mx-auto mt-4 max-w-md font-editorial text-base italic leading-relaxed text-linen/80 sm:text-lg">
          Together with their families, they invite you to witness their Katb El-Ketab.
        </p>
        <p className="mt-7 text-[10px] uppercase leading-5 tracking-[0.25em] text-champagne/75">Under the Alexandrian stars</p>

        <p className="mt-5 text-xs font-light tracking-wide text-linen/70">
          {isPersonalized ? 'A place has been kept for' : 'A place has been kept for our'}
        </p>
        <p className="mx-auto mt-1 max-w-md break-words font-display text-2xl leading-tight text-linen [overflow-wrap:anywhere]">{guestName}</p>

        <button
          ref={enterButtonRef}
          type="button"
          className="button-primary relative mt-8 aria-disabled:cursor-wait aria-disabled:opacity-60"
          onClick={onOpen}
          aria-disabled={isPreparing || isClosing}
          aria-label={isPreparing ? 'Opening the first page, please wait' : 'Open our story and invitation'}
        >
          <MailOpen className="h-4 w-4" aria-hidden="true" />
          {isPreparing ? 'Opening the first page…' : 'Open our story'}
        </button>
        {error && <p className="mx-auto mt-4 max-w-sm text-xs leading-5 text-red-100" role="alert">{error}</p>}
        <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-linen/65">The first page is waiting</p>
      </div>
    </div>
  )
}
