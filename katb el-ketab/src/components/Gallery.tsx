import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { ArrowLeft, ArrowRight, Maximize2, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { galleryItems } from '../data/invitation'
import { SectionHeading } from './SectionHeading'

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)

  const close = () => {
    setActiveIndex(null)
    window.setTimeout(() => triggerRef.current?.focus(), 0)
  }

  const go = (direction: number) => {
    setActiveIndex((current) => {
      if (current === null) return null
      return (current + direction + galleryItems.length) % galleryItems.length
    })
  }

  useEffect(() => {
    if (activeIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
      if (event.key === 'ArrowLeft') go(-1)
      if (event.key === 'ArrowRight') go(1)
      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>('button:not([disabled])'))
        if (focusable.length === 0) return
        const currentIndex = focusable.indexOf(document.activeElement as HTMLElement)
        const nextIndex = event.shiftKey
          ? (currentIndex - 1 + focusable.length) % focusable.length
          : (currentIndex + 1) % focusable.length
        event.preventDefault()
        focusable[nextIndex].focus()
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [activeIndex])

  const open = (index: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger
    setActiveIndex(index)
  }

  const onDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (Math.abs(info.offset.x) < 60) return
    go(info.offset.x < 0 ? 1 : -1)
  }

  return (
    <section id="gallery" className="section-shell overflow-hidden bg-ivory">
      <SectionHeading
        eyebrow="A glimpse of us"
        title="Moments we treasure"
        subtitle="A little window into our world — and the beautiful place where we will celebrate together."
      />

      <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 sm:gap-7">
        {galleryItems.map((item, index) => (
          <motion.button
            type="button"
            className={`group relative overflow-hidden bg-parchment text-left shadow-editorial focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
              index === 0 ? 'aspect-[4/5] sm:mt-14' : 'aspect-[4/5]'
            }`}
            key={item.src}
            onClick={(event) => open(index, event.currentTarget)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, delay: index * 0.12 }}
            aria-label={`Open photo: ${item.caption}`}
          >
            <img
              src={item.src}
              srcSet={item.srcSet}
              sizes="(min-width: 640px) 45vw, 92vw"
              width={item.width}
              height={item.height}
              alt={item.alt}
              className={`h-full w-full object-cover transition duration-700 group-hover:scale-[1.035] ${
                index === 0 ? 'object-[62%_44%]' : 'object-[50%_30%] saturate-[0.88]'
              }`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/65 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6 text-linen sm:p-8">
              <div>
                <p className="text-[9px] uppercase tracking-[0.24em] text-champagne">0{index + 1}</p>
                <p className="mt-2 font-display text-2xl italic sm:text-3xl">{item.caption}</p>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full border border-linen/45 bg-espresso/15 backdrop-blur transition group-hover:bg-linen group-hover:text-espresso">
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            ref={dialogRef}
            className="fixed inset-0 z-[110] grid place-items-center bg-espresso/95 p-4 backdrop-blur-md sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Photo gallery"
            onClick={close}
          >
            <button
              type="button"
              ref={closeButtonRef}
              className="absolute right-4 top-[max(1rem,env(safe-area-inset-top))] z-10 grid h-11 w-11 place-items-center rounded-full border border-linen/30 text-linen transition hover:bg-linen hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-champagne sm:right-7 sm:top-7"
              onClick={close}
              aria-label="Close gallery"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              type="button"
              className="absolute left-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-linen/25 text-linen transition hover:bg-linen hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne sm:left-7"
              onClick={(event) => { event.stopPropagation(); go(-1) }}
              aria-label="Previous photo"
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              className="absolute right-3 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-linen/25 text-linen transition hover:bg-linen hover:text-espresso focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne sm:right-7"
              onClick={(event) => { event.stopPropagation(); go(1) }}
              aria-label="Next photo"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>

            <AnimatePresence mode="wait">
              <motion.figure
                key={activeIndex}
                className="flex h-full max-h-[88svh] w-full max-w-5xl flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.32 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                onDragEnd={onDragEnd}
                onClick={(event) => event.stopPropagation()}
              >
                <img
                  src={galleryItems[activeIndex].src}
                  srcSet={galleryItems[activeIndex].srcSet}
                  sizes="90vw"
                  width={galleryItems[activeIndex].width}
                  height={galleryItems[activeIndex].height}
                  alt={galleryItems[activeIndex].alt}
                  className="min-h-0 max-h-[78svh] w-auto max-w-full select-none object-contain shadow-2xl"
                />
                <figcaption className="mt-4 font-display text-xl italic text-linen sm:text-2xl">
                  {galleryItems[activeIndex].caption}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
