import { LoaderCircle, Music2, Pause, Radio } from 'lucide-react'
import type { RefObject } from 'react'
import type { MusicStatus } from '../hooks/useSoundCloud'

type MusicPlayerProps = {
  iframeRef: RefObject<HTMLIFrameElement | null>
  status: MusicStatus
  trackUrl: string
  active: boolean
  visible: boolean
  onToggle: () => void
}

const labels: Record<MusicStatus, string> = {
  loading: 'Music is loading',
  ready: 'Play background music',
  playing: 'Pause background music',
  paused: 'Resume background music',
  error: 'Open music on SoundCloud',
}

export function MusicPlayer({ iframeRef, status, trackUrl, active, visible, onToggle }: MusicPlayerProps) {
  const playerUrl = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    trackUrl,
  )}&color=%23b28a4b&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&visual=false`

  return (
    <>
      <iframe
        ref={iframeRef}
        className="pointer-events-none fixed -left-10 -top-10 h-px w-px opacity-0"
        src={active ? playerUrl : undefined}
        title="Background music from SoundCloud"
        allow="autoplay; encrypted-media"
        tabIndex={-1}
        aria-hidden="true"
      />
      <button
        type="button"
        className={`fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-gold/40 bg-linen/95 text-espresso shadow-float backdrop-blur transition duration-500 hover:-translate-y-1 hover:border-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold sm:bottom-7 sm:right-7 ${
          visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-5 opacity-0'
        }`}
        onClick={onToggle}
        aria-label={labels[status]}
        title={labels[status]}
        tabIndex={visible ? 0 : -1}
        aria-hidden={!visible}
      >
        {status === 'loading' && <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />}
        {status === 'playing' && <Pause className="h-5 w-5" fill="currentColor" aria-hidden="true" />}
        {(status === 'ready' || status === 'paused') && <Music2 className="h-5 w-5" aria-hidden="true" />}
        {status === 'error' && <Radio className="h-5 w-5" aria-hidden="true" />}
        {status === 'playing' && (
          <span className="absolute inset-0 -z-10 animate-music-pulse rounded-full border border-gold/35" aria-hidden="true" />
        )}
      </button>
    </>
  )
}
