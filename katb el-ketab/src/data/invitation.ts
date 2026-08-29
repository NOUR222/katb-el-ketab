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
    title: 'The first page',
    text: 'Two lives, each following its own path, began to make room for one shared story.',
  },
  {
    title: 'The story grew',
    text: 'Through ordinary days, quiet kindness, and moments of joy, love became the place that felt like home.',
  },
  {
    title: 'The promise ahead',
    text: 'With grateful hearts and our families beside us, we now begin the chapter that will carry both our names.',
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
  { ...invitation.images.couple, caption: 'The joy we share' },
  { ...invitation.images.venue, caption: 'The place awaiting us' },
  { ...invitation.images.venueAisle, caption: 'The path to our promise' },
]
