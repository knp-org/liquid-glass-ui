import React from 'react';

export function GlassTooltip({ children, text }: { children: React.ReactNode, text: string }) {
  return (
    <div className="glass-tooltip-container">
      {children}
      <div className="glass-tooltip">{text}</div>
    </div>
  );
}
