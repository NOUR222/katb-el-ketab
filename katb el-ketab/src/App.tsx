import { lazy, Suspense, useEffect, useState } from 'react'
import { MusicPlayer } from './components/MusicPlayer'
import { OpeningScreen } from './components/OpeningScreen'
import { invitation } from './data/invitation'
import { useGuestName } from './hooks/useGuestName'
import { useSoundCloud } from './hooks/useSoundCloud'

const loadInvitationContent = () => import('./InvitationContent')
const InvitationContent = lazy(loadInvitationContent)

export default function App() {
  const [opened, setOpened] = useState(false)
  const [openingVisible, setOpeningVisible] = useState(true)
  const guest = useGuestName()
  const music = useSoundCloud(invitation.music.trackUrl)

  useEffect(() => {
    document.body.style.overflow = openingVisible ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [openingVisible])

  const openInvitation = () => {
    if (opened) return
    music.play()
    setOpened(true)

    const minimumTransition = new Promise<void>((resolve) => window.setTimeout(resolve, 800))
    void Promise.all([loadInvitationContent(), minimumTransition]).then(() => {
      setOpeningVisible(false)

      let attempts = 0
      const focusInvitation = () => {
        const hero = document.getElementById('home')
        if (hero) hero.focus({ preventScroll: true })
        else if (attempts++ < 20) window.setTimeout(focusInvitation, 50)
      }
      window.setTimeout(focusInvitation, 0)
    })
  }

  return (
    <>
      {openingVisible && (
        <OpeningScreen
          guestName={guest.name}
          isPersonalized={guest.isPersonalized}
          isClosing={opened}
          onOpen={openInvitation}
        />
      )}

      <MusicPlayer
        iframeRef={music.iframeRef}
        status={music.status}
        trackUrl={invitation.music.trackUrl}
        visible={opened && !openingVisible}
        onToggle={music.toggle}
      />

      <div inert={openingVisible} aria-hidden={openingVisible}>
        <Suspense fallback={<div className="min-h-screen bg-ivory" aria-hidden="true" />}>
          {opened && <InvitationContent guestName={guest.name} isPersonalized={guest.isPersonalized} />}
        </Suspense>
      </div>
    </>
  )
}
