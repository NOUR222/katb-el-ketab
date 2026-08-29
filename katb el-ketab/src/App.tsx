import { lazy, Suspense, useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'
import { MusicPlayer } from './components/MusicPlayer'
import { OpeningScreen } from './components/OpeningScreen'
import { invitation } from './data/invitation'
import { useAudioClip } from './hooks/useAudioClip'
import { useGuestName } from './hooks/useGuestName'

const loadInvitationContent = () => import('./InvitationContent')
const InvitationContent = lazy(loadInvitationContent)

export default function App() {
  const [opened, setOpened] = useState(false)
  const [openingVisible, setOpeningVisible] = useState(true)
  const [isPreparing, setIsPreparing] = useState(false)
  const [openingError, setOpeningError] = useState('')
  const guest = useGuestName()
  const music = useAudioClip()

  useEffect(() => {
    document.body.style.overflow = openingVisible ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [openingVisible])

  const openInvitation = async () => {
    if (opened || isPreparing) return
    music.play()
    setIsPreparing(true)
    setOpeningError('')

    try {
      await loadInvitationContent()
    } catch {
      music.pause()
      setIsPreparing(false)
      setOpeningError('The invitation could not be prepared just now. Please try opening it again.')
      return
    }

    setOpened(true)
    setIsPreparing(false)

    const transitionDuration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 20 : 800
    window.setTimeout(() => {
      setOpeningVisible(false)

      let attempts = 0
      const focusInvitation = () => {
        const hero = document.getElementById('home')
        if (hero) hero.focus({ preventScroll: true })
        else if (attempts++ < 20) window.setTimeout(focusInvitation, 50)
      }
      window.setTimeout(focusInvitation, 0)
    }, transitionDuration)
  }

  return (
    <MotionConfig reducedMotion="user">
      {openingVisible && (
        <OpeningScreen
          guestName={guest.name}
          isPersonalized={guest.isPersonalized}
          isClosing={opened}
          isPreparing={isPreparing}
          error={openingError}
          onOpen={openInvitation}
        />
      )}

      <MusicPlayer
        audioRef={music.audioRef}
        status={music.status}
        src={invitation.music.src}
        visible={opened && !openingVisible}
        onToggle={music.toggle}
      />

      <div inert={openingVisible} aria-hidden={openingVisible}>
        <Suspense fallback={<div className="min-h-screen bg-ivory" aria-hidden="true" />}>
          {opened && <InvitationContent guestName={guest.name} isPersonalized={guest.isPersonalized} />}
        </Suspense>
      </div>
    </MotionConfig>
  )
}
