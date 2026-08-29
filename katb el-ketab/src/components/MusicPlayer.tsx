import { LoaderCircle, Music2, Pause, VolumeX } from 'lucide-react'
import type { RefObject } from 'react'
import type { MusicStatus } from '../hooks/useAudioClip'

type MusicPlayerProps = {
  audioRef: RefObject<HTMLAudioElement | null>
  status: MusicStatus
  src: string
  visible: boolean
  onToggle: () => void
}

const labels: Record<MusicStatus, string> = {
  loading: 'Music is loading',
  ready: 'Play background music',
  playing: 'Pause background music',
  paused: 'Resume background music',
  ended: 'Replay background music',
  error: 'Music could not be loaded',
}

export function MusicPlayer({ audioRef, status, src, visible, onToggle }: MusicPlayerProps) {
  return (
    <>
      <audio
        ref={audioRef}
        className="pointer-events-none fixed -left-10 -top-10 h-px w-px opacity-0"
        src={src}
        preload="auto"
        loop
        tabIndex={-1}
        aria-hidden="true"
      />
      <button
        type="button"
        className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-linen/95 text-espresso shadow-float backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold disabled:cursor-not-allowed disabled:opacity-60 sm:bottom-7 sm:right-7 ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
        }`}
        onClick={onToggle}
        disabled={status === 'error'}
        aria-label={labels[status]}
        title={labels[status]}
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
      >
        {status === 'loading' && <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />}
        {status === 'playing' && <Pause className="h-5 w-5" fill="currentColor" aria-hidden="true" />}
        {(status === 'ready' || status === 'paused' || status === 'ended') && <Music2 className="h-5 w-5" aria-hidden="true" />}
        {status === 'error' && <VolumeX className="h-5 w-5" aria-hidden="true" />}
        {status === 'playing' && (
          <span className="absolute inset-0 -z-10 animate-music-pulse rounded-full border border-gold/35" aria-hidden="true" />
        )}
      </button>
    </>
  )
}
