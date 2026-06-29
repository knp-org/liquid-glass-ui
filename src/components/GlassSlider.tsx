import React from 'react';

interface GlassSliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Animate a sweeping "light" across the fill. Off by default: it runs an
   *  infinite animation, so only enable it on transient/short-lived sliders. */
  shimmer?: boolean;
}

export function GlassSlider({ value, min = 0, max = 100, style, className = '', shimmer = false, ...props }: GlassSliderProps) {
  // The native <input type="range"> trough is rendered by the platform
  // (e.g. WebKitGTK paints it in the system accent colour and ignores
  // `background`/`accent-color`). To stay on-theme everywhere we hide the
  // native control (opacity: 0) and draw our own track/fill/thumb, while the
  // invisible input on top still handles all pointer + keyboard interaction.
  const num = Number(value);
  const lo = Number(min);
  const hi = Number(max);
  const pct = Number.isFinite(num) && hi > lo ? ((num - lo) / (hi - lo)) * 100 : 0;
  const clamped = Math.min(100, Math.max(0, pct));

  return (
    <div className={`glass-slider-container ${className}`}>
      <div className="glass-slider-track">
        <div
          className={`glass-slider-fill ${shimmer ? 'glass-slider-fill--shimmer' : ''}`}
          style={{ width: `${clamped}%` }}
        ></div>
        <div className="glass-slider-thumb" style={{ left: `${clamped}%` }}></div>
      </div>
      <input
        type="range"
        className="glass-slider-input"
        value={value}
        min={min}
        max={max}
        style={style}
        {...props}
      />
    </div>
  );
}
