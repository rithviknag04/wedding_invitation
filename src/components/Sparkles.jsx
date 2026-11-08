import React from 'react';

/**
 * Ambient floating gold sparkle particles
 */
export default function Sparkles({ count = 8, spread = 29, durationBase = 6 }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="sp"
          style={{
            left: `${(i * spread) % 100}%`,
            width: `${5 + (i % 6)}px`,
            height: `${5 + (i % 6)}px`,
            animationDuration: `${durationBase + (i % 6)}s`,
            animationDelay: `${-(i * 1.5)}s`
          }}
        />
      ))}
    </>
  );
}

