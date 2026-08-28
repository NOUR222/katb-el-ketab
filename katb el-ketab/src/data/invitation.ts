export const invitation = {
  couple: {
    groom: 'Noureldin Abdelfattah',
    bride: 'Rana Salah',
    shortGroom: 'Noureldin',
    shortBride: 'Rana',
  },
  event: {
    name: 'Katb El-Ketab',
    dateLabel: 'Friday, October 2, 2026',
    dateShort: '02 · 10 · 2026',
    timeLabel: '3:00 PM',
    isoDate: '2026-10-02T15:00:00+03:00',
    venue: 'Al Mowasah Open Air',
    address: 'Gamee Al Moasah · Bab Sharq, Alexandria',
    mapsUrl: 'https://maps.app.goo.gl/ArP7HwdqR8PfUNc86?g_st=ic',
  },
  music: {
    // Stable URL resolved from the supplied SoundCloud short link.
    trackUrl: 'https://soundcloud.com/user-878757150-100179626/home',
  },
  images: {
    couple: {
      src: '/images/couple-960.webp',
      srcSet:
        '/images/couple-640.webp 640w, /images/couple-960.webp 960w, /images/couple-1440.webp 1440w',
      alt: 'Noureldin and Rana smiling together outdoors beneath palm trees',
      width: 960,
      height: 1280,
    },
    venue: {
      src: '/images/venue-960.webp',
      srcSet: '/images/venue-640.webp 640w, /images/venue-960.webp 960w',
      alt: 'The open-air lawn at Al Mowasah with white seating and a ceremony canopy',
      width: 960,
      height: 1280,
    },
  },
} as const

// Edit these chapters when you are ready to add personal dates and memories.
export const storyChapters = [
  {
    marker: 'I',
    title: 'A beautiful beginning',
    text: 'Two paths became one story — full of laughter, quiet moments, and the kind of love that feels like home.',
  },
  {
    marker: 'II',
    title: 'A promise made',
    text: 'With grateful hearts, we are choosing forever and beginning our next chapter surrounded by the people we love.',
  },
  {
    marker: 'III',
    title: 'The best is yet to come',
    text: 'Our Katb El-Ketab is not only a celebration of us, but of every person who helped our story bloom.',
  },
] as const

export type GalleryItem = {
  src: string
  srcSet: string
  alt: string
  width: number
  height: number
  caption: string
}

export const galleryItems: GalleryItem[] = [
  { ...invitation.images.couple, caption: 'Us, exactly as we are' },
  { ...invitation.images.venue, caption: 'Where we begin forever' },
]
