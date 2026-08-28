type BotanicalMarkProps = {
  className?: string
  mirrored?: boolean
}

export function BotanicalMark({ className = '', mirrored = false }: BotanicalMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={`${className} ${mirrored ? '-scale-x-100' : ''}`}
      viewBox="0 0 130 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 198C73 147 86 85 72 12" stroke="currentColor" strokeWidth="1.1" />
      <path d="M70 31C49 27 36 17 29 4C48 7 62 16 70 31Z" stroke="currentColor" />
      <path d="M75 54C94 46 107 33 112 18C93 24 81 36 75 54Z" stroke="currentColor" />
      <path d="M70 77C49 73 35 63 26 48C48 52 62 62 70 77Z" stroke="currentColor" />
      <path d="M65 105C84 96 97 81 101 65C82 72 71 86 65 105Z" stroke="currentColor" />
      <path d="M55 133C36 129 22 119 13 104C34 108 48 118 55 133Z" stroke="currentColor" />
      <path d="M41 163C58 153 69 139 72 124C55 131 45 143 41 163Z" stroke="currentColor" />
    </svg>
  )
}
