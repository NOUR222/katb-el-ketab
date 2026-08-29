interface SoundCloudWidget {
  bind(event: string, callback: () => void): void
  play(): void
  pause(): void
  isPaused(callback: (paused: boolean) => void): void
}

interface SoundCloudWidgetFactory {
  (iframe: HTMLIFrameElement): SoundCloudWidget
  Events: {
    READY: string
    PLAY: string
    PAUSE: string
    FINISH: string
    ERROR: string
  }
}

interface Window {
  SC?: { Widget: SoundCloudWidgetFactory }
}
