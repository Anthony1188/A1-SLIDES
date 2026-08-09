import React from 'react';

interface NovagentecMarkProps {
  className?: string;
  color?: string;
}

export const NovagentecMark: React.FC<NovagentecMarkProps> = ({
  className = "w-6 h-6",
  color = "currentColor",
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="NOVAGENTEC Symbol"
    >
      {/* 1. Top-Right Floating Parallel Accent Bar */}
      <path d="M 52 0 L 76 0 L 58 26 L 34 26 Z" />

      {/* 2. Main N Monogram with Left Triangular Window & Sharp Right Anchor */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M 0 0 L 0 100 L 36 64 L 100 100 L 62 46 L 0 0 Z M 12 24 L 12 76 L 30 58 Z"
      />
    </svg>
  );
};
