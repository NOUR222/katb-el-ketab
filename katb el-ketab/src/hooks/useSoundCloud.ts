import { useCallback, useEffect, useRef, useState } from 'react'

export type MusicStatus = 'loading' | 'ready' | 'playing' | 'paused' | 'error'

const SCRIPT_ID = 'soundcloud-widget-api'

export function useSoundCloud(trackUrl: string) {
  const iframeRef = useRef<HTMLIFrameElement>(null)
  const widgetRef = useRef<SoundCloudWidget | null>(null)
  const playRequestedRef = useRef(false)
  const initializedRef = useRef(false)
  const [status, setStatus] = useState<MusicStatus>('loading')

  useEffect(() => {
    const initializeWidget = () => {
      if (!window.SC || !iframeRef.current || initializedRef.current) return

      initializedRef.current = true
      const widget = window.SC.Widget(iframeRef.current)
      const events = window.SC.Widget.Events
      widgetRef.current = widget

      widget.bind(events.READY, () => {
        setStatus('ready')
        if (playRequestedRef.current) widget.play()
      })
      widget.bind(events.PLAY, () => setStatus('playing'))
      widget.bind(events.PAUSE, () => setStatus('paused'))
      widget.bind(events.FINISH, () => setStatus('paused'))
      widget.bind(events.ERROR, () => setStatus('error'))
    }

    if (window.SC) {
      initializeWidget()
      return
    }

    const existingScript = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null
    const script = existingScript ?? document.createElement('script')

    if (!existingScript) {
      script.id = SCRIPT_ID
      script.src = 'https://w.soundcloud.com/player/api.js'
      script.async = true
      document.head.appendChild(script)
    }

    script.addEventListener('load', initializeWidget)
    script.addEventListener('error', () => setStatus('error'), { once: true })

    return () => script.removeEventListener('load', initializeWidget)
  }, [])

  const play = useCallback(() => {
    playRequestedRef.current = true
    // The iframe is preloaded, so this call happens directly inside the
    // visitor's click. Safari requires this synchronous user gesture.
    if (widgetRef.current) widgetRef.current.play()
  }, [])

  const pause = useCallback(() => {
    playRequestedRef.current = false
    widgetRef.current?.pause()
  }, [])

  const toggle = useCallback(() => {
    if (status === 'error') {
      window.open(trackUrl, '_blank', 'noopener,noreferrer')
      return
    }

    if (status === 'playing') pause()
    else play()
  }, [pause, play, status, trackUrl])

  return { iframeRef, status, play, toggle }
}
