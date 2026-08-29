import { useCallback, useEffect, useRef, useState } from 'react'

export type MusicStatus = 'loading' | 'ready' | 'playing' | 'paused' | 'ended' | 'error'

export function useAudioClip() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const playRequestedRef = useRef(false)
  const [status, setStatus] = useState<MusicStatus>('loading')

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const playWhenReady = () => {
      setStatus((current) => (current === 'playing' ? current : 'ready'))
      if (playRequestedRef.current) {
        void audio.play().catch(() => setStatus('error'))
      }
    }
    const markPlaying = () => setStatus('playing')
    const markPaused = () => setStatus('paused')
    const resetAfterClip = () => {
      playRequestedRef.current = false
      setStatus('ended')
    }
    const markError = () => setStatus('error')

    audio.addEventListener('canplay', playWhenReady)
    audio.addEventListener('playing', markPlaying)
    audio.addEventListener('pause', markPaused)
    audio.addEventListener('ended', resetAfterClip)
    audio.addEventListener('error', markError)

    if (audio.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA) playWhenReady()

    return () => {
      audio.removeEventListener('canplay', playWhenReady)
      audio.removeEventListener('playing', markPlaying)
      audio.removeEventListener('pause', markPaused)
      audio.removeEventListener('ended', resetAfterClip)
      audio.removeEventListener('error', markError)
    }
  }, [])

  const play = useCallback(() => {
    playRequestedRef.current = true
    const audio = audioRef.current
    if (!audio) return
    if (audio.ended || audio.currentTime >= audio.duration - 0.1) audio.currentTime = 0
    void audio.play().catch(() => setStatus('error'))
  }, [])

  const pause = useCallback(() => {
    playRequestedRef.current = false
    audioRef.current?.pause()
  }, [])

  const toggle = useCallback(() => {
    if (status === 'playing') pause()
    else if (status !== 'error') play()
  }, [pause, play, status])

  return { audioRef, status, play, pause, toggle }
}
