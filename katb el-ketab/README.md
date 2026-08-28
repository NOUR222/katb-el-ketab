# Noureldin & Rana — Katb El-Ketab Invitation

A responsive React invitation built with Vite, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open the personalized version with a query parameter:

```text
http://localhost:5173/?guest=Ahmed%20Family
```

Production checks:

```bash
npm run build
npm run lint
```

The optional `npm run qa` browser suite expects the local dev server on port `4173` and Google Chrome installed in `/Applications`.

## Edit invitation content

Names, event details, venue, music, images, and the story timeline live in:

```text
src/data/invitation.ts
```

## RSVP backend

The form currently logs a typed submission object in the browser console. Replace the implementation in `src/services/rsvp.ts` with an API call when a backend is ready.

## Music

The SoundCloud widget is loaded with autoplay disabled. Playback is requested only after the visitor presses **Open invitation**, and the floating control can pause or resume it.
