export type RsvpSubmission = {
  name: string
  guests: number
  attendance: 'yes' | 'no'
  message: string
  submittedAt: string
}

/**
 * Replace this implementation with a POST request when an RSVP backend is ready.
 * Keeping the boundary here means the form UI will not need to change.
 */
export async function submitRsvp(submission: RsvpSubmission) {
  console.info('[RSVP submission]', submission)
  return Promise.resolve({ ok: true as const })
}
