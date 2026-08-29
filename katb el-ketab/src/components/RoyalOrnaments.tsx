import { invitation } from '../data/invitation'

type OrnamentProps = {
  className?: string
}

type StarlightFieldProps = OrnamentProps & {
  density?: 'full' | 'sparse'
}

const starlights = [
  { left: '6%', top: '12%', size: 11, duration: 7.4, delay: -1.2, glint: true },
  { left: '15%', top: '31%', size: 2, duration: 6.3, delay: -4.1 },
  { left: '9%', top: '62%', size: 3, duration: 8.8, delay: -2.7 },
  { left: '23%', top: '82%', size: 2, duration: 7.1, delay: -5.3 },
  { left: '31%', top: '14%', size: 8, duration: 9.2, delay: -3.8, glint: true },
  { left: '43%', top: '7%', size: 2, duration: 6.8, delay: -1.9 },
  { left: '66%', top: '9%', size: 3, duration: 8.1, delay: -6.2 },
  { left: '79%', top: '21%', size: 2, duration: 5.9, delay: -3.2 },
  { left: '93%', top: '12%', size: 12, duration: 8.6, delay: -5.8, glint: true },
  { left: '88%', top: '37%', size: 3, duration: 7.7, delay: -2.2 },
  { left: '95%', top: '64%', size: 2, duration: 6.5, delay: -4.9 },
  { left: '83%', top: '84%', size: 3, duration: 9.5, delay: -6.7 },
  { left: '69%', top: '75%', size: 9, duration: 7.9, delay: -2.8, glint: true },
  { left: '55%', top: '92%', size: 2, duration: 6.1, delay: -4.4 },
  { left: '34%', top: '90%', size: 3, duration: 8.4, delay: -1.6 },
  { left: '5%', top: '88%', size: 8, duration: 9, delay: -5.5, glint: true },
] as const

export function RoyalCrest({ className = '' }: OrnamentProps) {
  const groomInitial = invitation.couple.shortGroom.charAt(0)
  const brideInitial = invitation.couple.shortBride.charAt(0)

  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 220 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M110 11L113.5 19.5L122 23L113.5 26.5L110 35L106.5 26.5L98 23L106.5 19.5L110 11Z" fill="currentColor" />
      <path d="M93 36C101 29 119 29 127 36" stroke="currentColor" strokeWidth="1" />
      <path d="M96 37L102 25L110 34L118 25L124 37" stroke="currentColor" strokeWidth="1" />

      <ellipse cx="110" cy="101" rx="43" ry="55" stroke="currentColor" strokeWidth="1.1" />
      <ellipse cx="110" cy="101" rx="37" ry="49" stroke="currentColor" strokeOpacity="0.48" strokeWidth="0.7" />
      <path d="M110 49V153" stroke="currentColor" strokeOpacity="0.22" strokeWidth="0.7" />

      <path d="M77 157C47 143 33 116 38 87C41 68 50 51 65 40" stroke="currentColor" strokeWidth="1.1" />
      <path d="M143 157C173 143 187 116 182 87C179 68 170 51 155 40" stroke="currentColor" strokeWidth="1.1" />

      <path d="M51 128C39 127 30 121 25 111C37 111 46 117 51 128Z" fill="currentColor" fillOpacity="0.32" stroke="currentColor" strokeWidth="0.7" />
      <path d="M43 105C32 101 25 93 23 82C35 85 42 93 43 105Z" fill="currentColor" fillOpacity="0.26" stroke="currentColor" strokeWidth="0.7" />
      <path d="M45 80C36 73 32 64 34 54C44 60 49 69 45 80Z" fill="currentColor" fillOpacity="0.23" stroke="currentColor" strokeWidth="0.7" />
      <path d="M57 58C51 48 52 38 58 29C65 39 64 49 57 58Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.7" />
      <path d="M58 143C46 145 36 141 29 132C41 130 51 134 58 143Z" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="0.7" />

      <path d="M169 128C181 127 190 121 195 111C183 111 174 117 169 128Z" fill="currentColor" fillOpacity="0.32" stroke="currentColor" strokeWidth="0.7" />
      <path d="M177 105C188 101 195 93 197 82C185 85 178 93 177 105Z" fill="currentColor" fillOpacity="0.26" stroke="currentColor" strokeWidth="0.7" />
      <path d="M175 80C184 73 188 64 186 54C176 60 171 69 175 80Z" fill="currentColor" fillOpacity="0.23" stroke="currentColor" strokeWidth="0.7" />
      <path d="M163 58C169 48 168 38 162 29C155 39 156 49 163 58Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.7" />
      <path d="M162 143C174 145 184 141 191 132C179 130 169 134 162 143Z" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="0.7" />

      <path d="M75 159C88 172 132 172 145 159" stroke="currentColor" strokeWidth="1" />
      <path d="M86 166C96 181 124 181 134 166" stroke="currentColor" strokeOpacity="0.55" strokeWidth="0.7" />

      <text
        x="94"
        y="111"
        fill="currentColor"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="47"
        fontWeight="400"
        textAnchor="middle"
      >
        {groomInitial}
      </text>
      <text
        x="126"
        y="111"
        fill="currentColor"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="47"
        fontWeight="400"
        textAnchor="middle"
      >
        {brideInitial}
      </text>
      <text
        x="110"
        y="107"
        fill="currentColor"
        fillOpacity="0.72"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="15"
        fontStyle="italic"
        textAnchor="middle"
      >
        &amp;
      </text>
    </svg>
  )
}

export function OrnamentalDivider({ className = '' }: OrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 280 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M0 17H93C111 17 118 8 126 8C133 8 136 13 140 17" stroke="currentColor" strokeWidth="0.8" />
      <path d="M280 17H187C169 17 162 8 154 8C147 8 144 13 140 17" stroke="currentColor" strokeWidth="0.8" />
      <path d="M0 20H89C106 20 114 26 124 26C132 26 136 21 140 17" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.65" />
      <path d="M280 20H191C174 20 166 26 156 26C148 26 144 21 140 17" stroke="currentColor" strokeOpacity="0.4" strokeWidth="0.65" />
      <path d="M140 7L143 14L150 17L143 20L140 27L137 20L130 17L137 14L140 7Z" fill="currentColor" />
      <circle cx="18" cy="17" r="1.4" fill="currentColor" />
      <circle cx="262" cy="17" r="1.4" fill="currentColor" />
    </svg>
  )
}

export function GildedMotes({ className = '' }: OrnamentProps) {
  return (
    <div className={`gilded-motes ${className}`} aria-hidden="true">
      {Array.from({ length: 10 }, (_, index) => <span className="gilded-mote" key={index} />)}
    </div>
  )
}

export function StarlightField({ className = '', density = 'full' }: StarlightFieldProps) {
  return (
    <div className={`starlight-field starlight-field--${density} ${className}`} aria-hidden="true">
      {starlights.map((star, index) => (
        density === 'sparse' && index % 2 === 1 ? null :
        <span
          className={`starlight ${'glint' in star && star.glint ? 'starlight--glint' : 'starlight--mote'}`}
          key={`${star.left}-${star.top}`}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
          data-star={index + 1}
        />
      ))}
    </div>
  )
}
