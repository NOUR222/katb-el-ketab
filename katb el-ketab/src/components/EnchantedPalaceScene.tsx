import { invitation } from '../data/invitation'

type EnchantedPalaceSceneProps = {
  className?: string
}

const windowDelays = ['-1.2s', '-3.8s', '-2.4s', '-5.1s', '-0.8s', '-4.4s', '-2.9s', '-5.7s', '-1.9s']

export function EnchantedPalaceScene({ className = '' }: EnchantedPalaceSceneProps) {
  return (
    <svg
      aria-hidden="true"
      className={`enchanted-palace ${className}`}
      viewBox="0 0 1200 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMax meet"
    >
      <path
        className="enchanted-palace__hill enchanted-palace__hill--far"
        d="M0 398C102 355 178 360 252 392C340 430 424 369 520 387C594 401 643 425 725 393C829 353 910 371 985 401C1054 428 1120 416 1200 382V520H0V398Z"
      />
      <path
        className="enchanted-palace__hill enchanted-palace__hill--near"
        d="M0 451C142 407 243 433 342 458C468 490 573 442 676 450C796 459 886 493 1010 448C1081 422 1133 429 1200 450V520H0V451Z"
      />

      <g className="enchanted-palace__palace">
        <path className="enchanted-palace__body" d="M103 389H1097V473H103V389Z" />
        <path className="enchanted-palace__body" d="M151 330H304V455H151V330ZM896 330H1049V455H896V330Z" />
        <path className="enchanted-palace__roof" d="M132 330C147 278 183 247 227 232C271 247 307 278 322 330H132ZM878 330C893 278 929 247 973 232C1017 247 1053 278 1068 330H878Z" />
        <path className="enchanted-palace__finial" d="M227 207L235 220L227 233L219 220L227 207ZM973 207L981 220L973 233L965 220L973 207Z" />

        <path className="enchanted-palace__body" d="M286 295H430V455H286V295ZM770 295H914V455H770V295Z" />
        <path className="enchanted-palace__roof" d="M271 295C287 245 323 215 358 203C393 215 429 245 445 295H271ZM755 295C771 245 807 215 842 203C877 215 913 245 929 295H755Z" />
        <path className="enchanted-palace__lantern" d="M346 205V179H370V205M352 179V162H364V179M358 144L365 155L358 166L351 155L358 144Z" />
        <path className="enchanted-palace__lantern" d="M830 205V179H854V205M836 179V162H848V179M842 144L849 155L842 166L835 155L842 144Z" />

        <path className="enchanted-palace__body" d="M421 282H779V455H421V282Z" />
        <path
          className="enchanted-palace__roof enchanted-palace__roof--central"
          d="M446 282C461 217 501 166 554 139C574 129 588 116 600 95C612 116 626 129 646 139C699 166 739 217 754 282H446Z"
        />
        <path className="enchanted-palace__lantern" d="M579 124V83H621V124M588 83V59H612V83M600 30L610 46L600 62L590 46L600 30Z" />
        <path className="enchanted-palace__detail" d="M479 282C496 225 539 179 600 153C661 179 704 225 721 282" />
        <path className="enchanted-palace__detail" d="M536 455V350C536 309 564 281 600 281C636 281 664 309 664 350V455" />

        <path className="enchanted-palace__terrace" d="M79 455H1121V474H79V455ZM132 376H1068V391H132V376Z" />
        <path className="enchanted-palace__detail" d="M83 474H1117M120 488H1080M177 405H1023" />

        <g className="enchanted-palace__arcade">
          <path d="M121 455V418C121 398 135 385 151 385C167 385 181 398 181 418V455" />
          <path d="M181 455V418C181 398 195 385 211 385C227 385 241 398 241 418V455" />
          <path d="M241 455V418C241 398 255 385 271 385C287 385 301 398 301 418V455" />
          <path d="M899 455V418C899 398 913 385 929 385C945 385 959 398 959 418V455" />
          <path d="M959 455V418C959 398 973 385 989 385C1005 385 1019 398 1019 418V455" />
          <path d="M1019 455V418C1019 398 1033 385 1049 385C1065 385 1079 398 1079 418V455" />
        </g>

        <g className="enchanted-palace__windows">
          {[
            'M189 363V343C189 328 205 317 227 317C249 317 265 328 265 343V363H189Z',
            'M320 347V323C320 305 336 293 358 293C380 293 396 305 396 323V347H320Z',
            'M474 342V318C474 297 491 283 513 283C535 283 552 297 552 318V342H474Z',
            'M570 455V358C570 337 583 323 600 323C617 323 630 337 630 358V455H570Z',
            'M648 342V318C648 297 665 283 687 283C709 283 726 297 726 318V342H648Z',
            'M804 347V323C804 305 820 293 842 293C864 293 880 305 880 323V347H804Z',
            'M935 363V343C935 328 951 317 973 317C995 317 1011 328 1011 343V363H935Z',
            'M342 410V388C342 375 349 367 358 367C367 367 374 375 374 388V410H342Z',
            'M826 410V388C826 375 833 367 842 367C851 367 858 375 858 388V410H826Z',
          ].map((path, index) => (
            <path
              className={`enchanted-palace__window ${index === 3 ? 'enchanted-palace__window--gate' : ''}`}
              d={path}
              key={path}
              style={{ animationDelay: windowDelays[index] }}
            />
          ))}
        </g>
        <text
          className="enchanted-palace__monogram"
          x="600"
          y="399"
          fontFamily="Cormorant Garamond, Georgia, serif"
          fontSize="18"
          textAnchor="middle"
        >
          {invitation.couple.shortGroom.charAt(0)} &amp; {invitation.couple.shortBride.charAt(0)}
        </text>

        <g className="enchanted-palace__garden">
          <path d="M55 470V391M55 405C31 392 24 374 27 358C44 370 55 386 55 405ZM55 410C77 395 87 378 85 362C67 372 56 389 55 410ZM55 388C42 368 42 349 49 335C63 350 65 369 55 388Z" />
          <path d="M1145 470V391M1145 405C1121 392 1114 374 1117 358C1134 370 1145 386 1145 405ZM1145 410C1167 395 1177 378 1175 362C1157 372 1146 389 1145 410ZM1145 388C1132 368 1132 349 1139 335C1153 350 1155 369 1145 388Z" />
          <path d="M91 470C91 440 106 423 123 423C140 423 155 440 155 470M1045 470C1045 440 1060 423 1077 423C1094 423 1109 440 1109 470" />
        </g>
      </g>

      <g className="enchanted-palace__mist-lines">
        <path d="M8 474C177 443 293 487 445 471C591 455 697 430 842 460C979 489 1072 487 1192 463" />
        <path d="M58 498C221 475 352 511 514 492C666 475 799 468 941 493C1031 509 1100 506 1161 495" />
      </g>
    </svg>
  )
}
