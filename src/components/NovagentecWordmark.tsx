import React from 'react';

interface NovagentecWordmarkProps {
  className?: string;
  color?: string;
}

export const NovagentecWordmark: React.FC<NovagentecWordmarkProps> = ({
  className = "h-4",
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 980 110"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="NOVAGENTEC"
    >
      {/* N 1 - with diagonal slash on left vertical stem */}
      <path d="M 10 10 H 24 V 42 L 10 32 Z" />
      <path d="M 10 48 L 24 58 V 100 H 10 Z" />
      <path d="M 10 10 L 24 10 L 86 100 H 72 Z" />
      <path d="M 72 10 H 86 V 100 H 72 Z" />

      {/* O - rounded technical rectangle */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 112 10 H 178 C 187 10 190 13 190 22 V 88 C 190 97 187 100 178 100 H 112 C 103 100 100 97 100 88 V 22 C 100 13 103 10 112 10 Z M 122 23 H 168 C 174 23 176 25 176 31 V 79 C 176 85 174 87 168 87 H 122 C 116 87 114 85 114 79 V 31 C 114 25 116 23 122 23 Z"
      />

      {/* V - angled technical V */}
      <path d="M 204 10 H 218 L 244 86 L 270 10 H 284 L 251 100 H 237 Z" />

      {/* A - angled A with diagonal slash on left leg */}
      <path d="M 338 10 H 350 L 383 100 H 369 L 361 78 H 345 L 340 65 H 356 L 344 32 Z" />
      <path d="M 305 100 L 328 36 L 333 49 L 318 100 Z" />

      {/* G - geometric G */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 406 10 H 468 C 477 10 480 13 480 22 V 42 H 466 V 23 C 466 21 460 21 454 21 H 416 C 410 21 408 23 408 30 V 80 C 408 87 410 89 416 89 H 456 C 462 89 466 87 466 80 V 58 H 442 V 46 H 480 V 88 C 480 97 477 100 468 100 H 406 C 397 100 394 97 394 88 V 22 C 394 13 397 10 406 10 Z"
      />

      {/* E 1 */}
      <path d="M 496 10 H 562 V 23 H 510 V 48 H 554 V 61 H 510 V 87 H 562 V 100 H 496 Z" />

      {/* N 2 - solid N */}
      <path d="M 578 10 H 592 V 100 H 578 Z" />
      <path d="M 578 10 L 592 10 L 654 100 H 640 Z" />
      <path d="M 640 10 H 654 V 100 H 640 Z" />

      {/* T */}
      <path d="M 670 10 H 736 V 23 H 710 V 100 H 696 V 23 H 670 Z" />

      {/* E 2 */}
      <path d="M 752 10 H 818 V 23 H 766 V 48 H 810 V 61 H 766 V 87 H 818 V 100 H 752 Z" />

      {/* C - C with right horizontal tab key */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 848 10 H 912 C 921 10 924 13 924 22 V 40 H 910 V 23 C 910 21 904 21 898 21 H 858 C 852 21 850 23 850 30 V 80 C 850 87 852 89 858 89 H 898 C 904 89 910 87 910 80 V 62 H 924 V 88 C 924 97 921 100 912 100 H 848 C 839 100 836 97 836 88 V 22 C 836 13 839 10 848 10 Z"
      />
      {/* Right Tab Key on C */}
      <path d="M 924 48 H 938 V 58 H 924 Z" />
    </svg>
  );
};
