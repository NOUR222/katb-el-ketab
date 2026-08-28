import { MotionConfig } from 'framer-motion'
import { Countdown } from './components/Countdown'
import { EventDetails } from './components/EventDetails'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { HeroSection } from './components/HeroSection'
import { RsvpSection } from './components/RsvpSection'
import { StoryTimeline } from './components/StoryTimeline'
import { VenueSection } from './components/VenueSection'

type InvitationContentProps = {
  guestName: string
  isPersonalized: boolean
}

export default function InvitationContent({ guestName, isPersonalized }: InvitationContentProps) {
  return (
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main-content">Skip to invitation content</a>
      <main id="main-content">
        <HeroSection guestName={guestName} isPersonalized={isPersonalized} />
        <EventDetails />
        <Countdown />
        <StoryTimeline />
        <VenueSection />
        <Gallery />
        <RsvpSection guestName={guestName} isPersonalized={isPersonalized} />
      </main>
      <Footer />
    </MotionConfig>
  )
}
