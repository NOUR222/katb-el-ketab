import { Heart } from 'lucide-react'
import { invitation } from '../data/invitation'

export function Footer() {
  return (
    <footer className="border-t border-espresso/10 bg-ivory px-5 py-10 text-center text-ink/80">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-2xl text-espresso">
            {invitation.couple.shortGroom} <span className="text-gold">&</span> {invitation.couple.shortBride}
          </p>
          <p className="mt-1 text-[9px] uppercase tracking-[0.23em]">{invitation.event.dateShort} · Alexandria</p>
        </div>
        <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em]">
          Made with <Heart className="h-3.5 w-3.5 text-gold" fill="currentColor" aria-label="love" /> for our forever
        </p>
      </div>
    </footer>
  )
}
