import { Heart } from 'lucide-react'
import { invitation } from '../data/invitation'
import { RoyalCrest } from './RoyalOrnaments'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-ivory px-5 pb-28 pt-10 text-center text-ink/80 sm:pb-24">
      <div className="paper-field pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-2xl text-espresso">
            {invitation.couple.shortGroom} <span className="text-gold">&</span> {invitation.couple.shortBride}
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.23em]">{invitation.event.dateShort} · Alexandria</p>
        </div>
        <RoyalCrest className="h-20 w-24 text-gold/70 sm:absolute sm:left-1/2 sm:-translate-x-1/2" />
        <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]">
          Made with <Heart className="h-3.5 w-3.5 text-gold" fill="currentColor" aria-label="love" /> for our forever
        </p>
      </div>
    </footer>
  )
}
