import React from 'react';
import { NovagentecMark } from './NovagentecMark';
import { NovagentecWordmark } from './NovagentecWordmark';

interface NovagentecLogoProps {
  className?: string;
  variant?: 'full' | 'inline' | 'wordmark' | 'mark' | 'header';
  color?: string;
  markSize?: string;
  wordmarkHeight?: string;
  showTagline?: boolean;
  tagline?: string;
}

export const NovagentecLogo: React.FC<NovagentecLogoProps> = ({
  className = '',
  variant = 'full',
  color = '#1A1A18',
  markSize = 'w-6 h-6',
  wordmarkHeight = 'h-4',
  showTagline = false,
  tagline = 'ENGINEERING INTELLIGENT BUSINESS INFRASTRUCTURE',
}) => {
  if (variant === 'mark') {
    return <NovagentecMark className={markSize} color={color} />;
  }

  if (variant === 'wordmark') {
    return (
      <div className={`flex flex-col items-start ${className}`}>
        <NovagentecWordmark className={wordmarkHeight} color={color} />
        {showTagline && (
          <span
            className="text-[8px] sm:text-[9px] font-mono tracking-[0.28em] uppercase opacity-70 mt-1 font-semibold"
            style={{ color }}
          >
            {tagline}
          </span>
        )}
      </div>
    );
  }

  // Full lockup with optional vertical divider line (like in official brand assets)
  if (variant === 'full') {
    return (
      <div className={`inline-flex flex-col select-none ${className}`}>
        <div className="inline-flex items-center gap-2 sm:gap-2.5">
          {/* Symbol Mark */}
          <NovagentecMark className={markSize} color={color} />
          {/* Thin Vertical Line Separator */}
          <div className="w-[1px] h-4 sm:h-5 bg-current opacity-25" style={{ color }} />
          {/* Vector Wordmark */}
          <NovagentecWordmark className={wordmarkHeight} color={color} />
        </div>
        {showTagline && (
          <span
            className="text-[7px] sm:text-[8.5px] font-mono tracking-[0.26em] uppercase opacity-65 mt-1 font-bold whitespace-nowrap"
            style={{ color }}
          >
            {tagline}
          </span>
        )}
      </div>
    );
  }

  // Compact inline lockup (for headers & footers)
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <NovagentecMark className={markSize} color={color} />
      <NovagentecWordmark className={wordmarkHeight} color={color} />
    </div>
  );
};
