import { useMemo } from 'react'

const FALLBACK_GUEST = 'dear family & friends'

export function useGuestName() {
  return useMemo(() => {
    const value = new URLSearchParams(window.location.search).get('guest')?.trim()
    const name = value ? value.slice(0, 80) : FALLBACK_GUEST

    return {
      name,
      isPersonalized: Boolean(value),
    }
  }, [])
}
