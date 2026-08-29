type FairytaleOrnamentProps = {
  className?: string
}

export function TiaraMark({ className = '' }: FairytaleOrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 180 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22 47C46 55 134 55 158 47" stroke="currentColor" strokeWidth="1.2" />
      <path d="M30 45C43 40 51 29 54 17C63 27 70 33 78 35C84 27 88 17 90 7C92 17 96 27 102 35C110 33 117 27 126 17C129 29 137 40 150 45" stroke="currentColor" strokeWidth="1.2" />
      <path d="M54 17L58 26L67 30L58 34L54 43L50 34L41 30L50 26L54 17Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M90 5L94 15L104 19L94 23L90 33L86 23L76 19L86 15L90 5Z" fill="currentColor" fillOpacity="0.28" stroke="currentColor" strokeWidth="0.8" />
      <path d="M126 17L130 26L139 30L130 34L126 43L122 34L113 30L122 26L126 17Z" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="0.8" />
      <path d="M38 50C60 60 120 60 142 50" stroke="currentColor" strokeOpacity="0.55" strokeWidth="0.8" />
      <circle cx="72" cy="45" r="2" fill="currentColor" fillOpacity="0.7" />
      <circle cx="108" cy="45" r="2" fill="currentColor" fillOpacity="0.7" />
    </svg>
  )
}

export function PalaceSilhouette({ className = '' }: FairytaleOrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 1200 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      <path
        d="M0 254H92V219H135V179L157 151L179 179V219H227V198H280V135L303 104L326 135V198H385V162H436V120L470 89L504 120V162H548V98L579 67L600 23L621 67L652 98V162H696V120L730 89L764 120V162H815V198H874V135L897 104L920 135V198H973V219H1021V179L1043 151L1065 179V219H1108V254H1200V280H0V254Z"
        fill="currentColor"
        fillOpacity="0.085"
      />
      <path
        d="M0 254H92V219H135V179L157 151L179 179V219H227V198H280V135L303 104L326 135V198H385V162H436V120L470 89L504 120V162H548V98L579 67L600 23L621 67L652 98V162H696V120L730 89L764 120V162H815V198H874V135L897 104L920 135V198H973V219H1021V179L1043 151L1065 179V219H1108V254H1200"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M600 2L605 10L600 18L595 10L600 2Z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="0.8" />
      <path d="M600 18V27" stroke="currentColor" strokeWidth="1" />
      <path d="M573 254V184C573 160 585 145 600 145C615 145 627 160 627 184V254" stroke="currentColor" strokeWidth="1.1" />
      <path d="M457 162V136C457 126 463 119 470 119C477 119 483 126 483 136V162M717 162V136C717 126 723 119 730 119C737 119 743 126 743 136V162" stroke="currentColor" strokeWidth="0.9" />
      <path d="M293 198V160C293 151 297 145 303 145C309 145 313 151 313 160V198M887 198V160C887 151 891 145 897 145C903 145 907 151 907 160V198" stroke="currentColor" strokeWidth="0.9" />
      <circle cx="470" cy="139" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="730" cy="139" r="3" fill="currentColor" fillOpacity="0.5" />
      <circle cx="303" cy="164" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <circle cx="897" cy="164" r="2.5" fill="currentColor" fillOpacity="0.5" />
      <path d="M510 224H690M530 206H670" stroke="currentColor" strokeOpacity="0.45" strokeWidth="0.8" />
    </svg>
  )
}

export function MagicTrail({ className = '' }: FairytaleOrnamentProps) {
  return (
    <svg
      aria-hidden="true"
      className={`magic-trail ${className}`}
      viewBox="0 0 320 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="magic-trail__path"
        d="M14 161C58 188 121 169 122 124C124 76 60 79 67 40C73 8 137 8 175 37C221 72 206 133 260 139C282 142 299 132 310 114"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1"
      />
      <path className="magic-trail__star magic-trail__star--one" d="M68 27L72 36L81 40L72 44L68 53L64 44L55 40L64 36L68 27Z" fill="currentColor" />
      <path className="magic-trail__star magic-trail__star--two" d="M123 111L126 118L133 121L126 124L123 131L120 124L113 121L120 118L123 111Z" fill="currentColor" />
      <path className="magic-trail__star magic-trail__star--three" d="M263 130L267 139L276 143L267 147L263 156L259 147L250 143L259 139L263 130Z" fill="currentColor" />
      <circle className="magic-trail__spark magic-trail__spark--one" cx="103" cy="24" r="2.2" fill="currentColor" />
      <circle className="magic-trail__spark magic-trail__spark--two" cx="192" cy="58" r="1.8" fill="currentColor" />
      <circle className="magic-trail__spark magic-trail__spark--three" cx="211" cy="121" r="2" fill="currentColor" />
    </svg>
  )
}
