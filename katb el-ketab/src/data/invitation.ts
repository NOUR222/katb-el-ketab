export const invitation = {
  couple: {
    groom: 'Noureldin Abdelfattah',
    bride: 'Rana Salah',
    shortGroom: 'Noureldin',
    shortBride: 'Rana',
    groomFamily: 'Abdelfattah',
    brideFamily: 'Salah',
  },
  event: {
    name: 'Katb El-Ketab',
    dateLabel: 'Thursday, October 1, 2026',
    dateShort: '01 · 10 · 2026',
    timeLabel: '7:00 PM',
    isoDate: '2026-10-01T19:00:00+03:00',
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
      src: '/images/venue-ceremony-960.webp',
      srcSet: '/images/venue-ceremony-640.webp 640w, /images/venue-ceremony-960.webp 960w',
      alt: 'The decorated open-air ceremony at Al Mowasah with white draping, floral arrangements, and guest seating',
      width: 960,
      height: 1282,
    },
    venueAisle: {
      src: '/images/venue-aisle-960.webp',
      srcSet: '/images/venue-aisle-640.webp 640w, /images/venue-aisle-960.webp 960w',
      alt: 'The flower-lined white aisle leading to the decorated Katb El-Ketab ceremony table at Al Mowasah',
      width: 960,
      height: 1270,
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
  { ...invitation.images.venue, caption: 'Where our forever begins' },
  { ...invitation.images.venueAisle, caption: 'The aisle to our next chapter' },
]
